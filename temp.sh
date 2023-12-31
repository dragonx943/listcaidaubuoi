#!/bin/sh

yay -Syu --needed  acpi arandr archlinux-xdg-menu awesome-terminal-fonts dex dmenu dunst file-roller galculator gtk-engine-murrine gvfs gvfs-afc gvfs-gphoto2 gvfs-mtp gvfs-nfs gvfs-smb power-profiles-daemon i3-gaps i3lock imagemagick jq lxappearance-gtk3 mpv network-manager-applet numlockx pavucontrol picom playerctl polkit-gnome rofi scrot sysstat thunar thunar-archive-plugin thunar-volman tumbler xbindkeys xdg-user-dirs-gtk xfce4-terminal xorg-xbacklight xorg-xdpyinfo ttf-ubuntu-font-family ttf-cascadia-code autotiling xfce4-panel xfce4-pulseaudio-plugin xfce4-sensors-plugin xfce4-cpufreq-plugin xfce4-screenshooter xfce4-clipman-plugin xfce4-panel-profiles lxtask-gtk3 pinta dotnet-runtime-6.0 firefox-developer-edition google-chrome zsh arc-gtk-theme qogir-icon-theme feh neofetch github-cli xorg-xinput
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
git clone https://github.com/lmarasim/xfi3.git
