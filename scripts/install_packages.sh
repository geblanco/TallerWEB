#!/bin/bash

##
# Packages:
#   - brackets
#   - build-essential
#   - chrome-browser
#   - sublime-text3
#   - nodejs, npm, electron
#   - git
#   - curl

# sublime text, brackets 
sudo add-apt-repository ppa:webupd8team/sublime-text-3 ppa:webupd8team/brackets
sudo apt-get update
sudo apt-get install -y sublime-text-installer brackets build-essential curl git

read -p "Instalar nodejs? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # node
  curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
  sudo apt-get install nodejs
fi

read -p "Instalar chrome-browser? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # google chrome
  sudo apt-get install libxss1 libappindicator1 libindicator7
  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
  sudo dpkg -i google-chrome*.deb
fi

# install electron
sudo npm install -g electron@1.3.8
