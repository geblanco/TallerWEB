#!/bin/bash
# Electron's version.
export npm_config_target=$(electron -v | cut -d v -f 2)
# The architecture of Electron, can be ia32 or x64.
export npm_config_arch=x64
# Download headers for Electron.
export npm_config_disturl=https://atom.io/download/atom-shell
# Tell node-pre-gyp that we are building for Electron.
export npm_config_runtime=electron
# Tell node-pre-gyp to build module from source code.
export npm_config_build_from_source=true
# Install all dependencies
npm install canvas@^1.3.10 electron-settings@^1.1.1 node-notifier@^4.5.0 upath --save
# Install libs for canvas
sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++
# get icons from project
[[ -d /tmp/pomodoro ]] && rm -rf /tmp/pomodoro
git clone https://github.com/m0n0l0c0/Pomodoro.git /tmp/pomodoro 1>/dev/null
cp -a /tmp/pomodoro/icons ./
cp -a /tmp/pomodoro/iconGenerator.js ./
rm -rf /tmp/pomodoro


