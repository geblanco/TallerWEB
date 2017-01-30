'use strict'

var electron = require('electron')
var BrowserWindow = electron.BrowserWindow

var win = new BrowserWindow({ width: 800, height: 600 })

// listen to 'closed' event on window object
win.on('closed', ...)
