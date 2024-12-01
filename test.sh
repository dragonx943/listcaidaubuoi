#!/data/data/com.termux/files/usr/bin/bash

# Thiết lập các biến môi trường
TERMUX_PREFIX="/data/data/com.termux/files/usr"
WIDEVINE_VERSION="4.10.2710.0"
LACROS_VERSION="120.0.6098.0"
LACROS_URL="https://commondatastorage.googleapis.com/chromeos-localmirror/distfiles/"

# Xác định kiến trúc CPU
ARCH=$(uname -m)
case "$ARCH" in
    "aarch64")
        WIDEVINE_ARCH="arm64"
        LACROS_IMG="chromeos-lacros-arm64-squash-zstd"
        ;;
    "armv7l"|"armv8l")
        WIDEVINE_ARCH="arm"
        LACROS_IMG="chromeos-lacros-arm-squash-zstd"
        ;;
    *) echo "Kiến trúc CPU không được hỗ trợ: $ARCH"; exit 1 ;;
esac

# Tạo thư mục tạm để tải về
TEMP_DIR=$(mktemp -d)
cd "$TEMP_DIR" || exit 1

# Tải Widevine từ nguồn Lacros
echo "Đang tải Widevine từ ChromeOS Lacros..."
wget -q "${LACROS_URL}${LACROS_IMG}-${LACROS_VERSION}" -O lacros.squashfs

# Cài đặt squashfs-tools nếu chưa có
if ! command -v unsquashfs &> /dev/null; then
    pkg install squashfs-tools -y
fi

# Giải nén squashfs
echo "Đang giải nén Widevine..."
unsquashfs -q lacros.squashfs 'WidevineCdm/*'

# Tạo thư mục cài đặt
mkdir -p "$TERMUX_PREFIX/opt/WidevineCdm/chromium/_platform_specific/linux_$WIDEVINE_ARCH"
mkdir -p "$TERMUX_PREFIX/opt/WidevineCdm/firefox/gmp-widevinecdm/system-installed"

# Di chuyển libwidevinecdm.so
cp "squashfs-root/WidevineCdm/_platform_specific/cros_$WIDEVINE_ARCH/libwidevinecdm.so" \
    "$TERMUX_PREFIX/opt/WidevineCdm/chromium/_platform_specific/linux_$WIDEVINE_ARCH/"

# Tạo manifest.json
cat > "$TERMUX_PREFIX/opt/WidevineCdm/chromium/manifest.json" << EOF
{
  "name": "WidevineCdm",
  "description": "Widevine Content Decryption Module",
  "version": "$WIDEVINE_VERSION",
  "x-cdm-codecs": "vp8,vp9.0,avc1,av01",
  "x-cdm-host-versions": "10",
  "x-cdm-interface-versions": "10",
  "x-cdm-module-versions": "4",
  "x-cdm-persistent-license-support": true
}
EOF

# Tạo firefox preferences
mkdir -p "$TERMUX_PREFIX/lib/firefox/browser/defaults/preferences"
cat > "$TERMUX_PREFIX/lib/firefox/browser/defaults/preferences/widevine.js" << EOF
pref("media.gmp-widevinecdm.version", "$WIDEVINE_VERSION");
pref("media.gmp-widevinecdm.visible", true);
pref("media.gmp-widevinecdm.enabled", true);
pref("media.gmp-widevinecdm.autoupdate", false);
pref("media.eme.enabled", true);
pref("media.eme.encrypted-media-encryption-scheme.enabled", true);
EOF

# Tạo profile.d script
mkdir -p "$TERMUX_PREFIX/etc/profile.d"
cat > "$TERMUX_PREFIX/etc/profile.d/firefox_widevine.sh" << EOF
MOZ_GMP_PATH="\$MOZ_GMP_PATH\${MOZ_GMP_PATH:+:}$TERMUX_PREFIX/opt/WidevineCdm/firefox/gmp-widevinecdm/system-installed"
export MOZ_GMP_PATH
EOF

# Tạo symbolic links
mkdir -p "$TERMUX_PREFIX/lib/chromium"
ln -sf "$TERMUX_PREFIX/opt/WidevineCdm/chromium" "$TERMUX_PREFIX/lib/chromium/WidevineCdm"
ln -sf "../../../chromium/_platform_specific/linux_$WIDEVINE_ARCH/libwidevinecdm.so" \
    "$TERMUX_PREFIX/opt/WidevineCdm/firefox/gmp-widevinecdm/system-installed/libwidevinecdm.so"
ln -sf "../../../chromium/manifest.json" \
    "$TERMUX_PREFIX/opt/WidevineCdm/firefox/gmp-widevinecdm/system-installed/manifest.json"

# HACK cho ARM
if [[ $WIDEVINE_ARCH == "arm"* ]]; then
    mkdir -p "$TERMUX_PREFIX/opt/WidevineCdm/chromium/_platform_specific/linux_x64"
    touch "$TERMUX_PREFIX/opt/WidevineCdm/chromium/_platform_specific/linux_x64/libwidevinecdm.so"
fi

# Dọn dẹp
rm -rf "$TEMP_DIR"

echo "Cài đặt Widevine hoàn tất!"
echo "Kiến trúc CPU được phát hiện: $ARCH"
echo "Widevine đã được cài đặt cho kiến trúc: $WIDEVINE_ARCH"
