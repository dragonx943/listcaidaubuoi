#!/bin/bash

BLUE="\033[1;34m"
ORANGE="\033[1;33m"
YELLOW="\033[1;33m"
GREEN="\033[1;32m"
RED="\033[1;31m"
RESET="\033[0m"

echo -ne "\033]0;Ubuntu\007"

VM=${DOCKER_MACHINE_NAME:-default}
DOCKER_MACHINE="${DOCKER_TOOLBOX_INSTALL_PATH}\docker-machine.exe"

if [ ! -z "$VBOX_MSI_INSTALL_PATH" ]; then
  VBOXMANAGE="${VBOX_MSI_INSTALL_PATH}VBoxManage.exe"
else
  VBOXMANAGE="${VBOX_INSTALL_PATH}VBoxManage.exe"
fi

cat << EOF


                        ##         .
                  ## ## ##        ==
               ## ## ## ## ##    ===
           /"""""""""""""""""\___/ ===
      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~~ ~ /  ===- ~~~
           \______ o           __/
             \    \         __/
              \____\_______/

EOF
echo -e "	      ${BLUE}Docker${RESET} + ${ORANGE}Ubuntu${RESET}"
echo ""
echo ""

if [ ! -f "${DOCKER_MACHINE}" ]; then
  echo -e "${RED}[-]${RESET} Docker Machine is not installed."; exit 1
fi
if [ ! -f "${VBOXMANAGE}" ]; then
  echo -e "${RED}[-]${RESET} VirtualBox is not installed."; exit 1
fi

echo -e "[${GREEN}1${RESET}] Starting Docker..."
"${VBOXMANAGE}" showvminfo "${VM}" | grep "running (since" >/dev/null 2>&1
if [ $? -ne 0 ]; then
    "${VBOXMANAGE}" startvm "${VM}" --type headless >/dev/null 2>&1
fi

echo -e " \t[${YELLOW}*${RESET}] Setting Docker environment..."
ENV_SCRIPT="$("${DOCKER_MACHINE}" env --shell=bash --no-proxy "${VM}" 2>/dev/null)"
eval "$ENV_SCRIPT" >/dev/null 2>&1

echo -e " \t[${YELLOW}*${RESET}] Waiting for Docker Engine to respond..."
for i in {1..30}; do
    if docker version >/dev/null 2>&1; then
        break
    fi
    echo -e " \t[${YELLOW}*${RESET}] Waiting for Docker..."
    sleep 1
done

if ! docker version >/dev/null 2>&1; then
    echo -e "${RED}[-]${RESET} Docker engine failed to start."; exit 1
fi

echo -e "[${GREEN}2${RESET}] Starting Ubuntu container (dra)..."
docker start dra >/dev/null 2>&1 || true

echo -e "[${GREEN}3${RESET}] Logging in..."
echo " "

exec docker exec -it dra login
