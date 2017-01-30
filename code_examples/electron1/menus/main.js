'use strict'
//Entry point, set custom object in global
var upath = require('upath')
// ***************** Electron *****************
var electron      = require('electron')
var app           = electron.app                // Module to control application life.
var BrowserWindow = electron.BrowserWindow      // Module to create native browser window.
var Menu          = electron.Menu               // Module to create menus.
var Tray          = electron.Tray               // Module to create tray items.
// ********************************************

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null

// Quit when all windows are closed.
app.on('window-all-closed', app.quit)

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function(){

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    center: true,
    show: true
  })

	mainWindow.loadURL('file://' + upath.join( __dirname, '/html/index.html' ))

  var template = [{
    label: 'Custom Item',
    click: function(){
      // ...
    }
  }]

  // Create a menu
  var menu = Menu.buildFromTemplate(template)
  mainWindow.setMenu( menu )
  // Menu.setApplicationMenu( menu )

  // Create items for Tray  
  var template = [{
    label: 'Try Menu Item 1'
  }, {
    label: 'Try Menu Item 2'
  }, {
    label: 'Try Menu Item 3'
  }, {
    type: 'separator'
  }, {
    label: 'Try Menu Item 4'
  }]

  // Create a menu for tray
  var trayMenu = Menu.buildFromTemplate(template)

  var appIcon = new Tray('./javapain.png')
  appIcon.setToolTip('This is a tray menu')
  appIcon.setContextMenu( trayMenu )

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
})
