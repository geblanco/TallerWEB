#!/bin/bash

# Grow disk
vboxmanage modifyhd <disk.vdi> --resize <size mb>

# Compact disk from GUEST

#sudo dd if=/dev/zero | pv | sudo dd of=/bigemptyfile bs=4096k
#sudo rm -rf /bigemptyfile

## Or:

telinit 1
mount -o remount,ro /dev/sda1
zerofree -v /dev/sda1

