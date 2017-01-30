'use strict'
//Entry point, set custom object in global
var upath = require('upath')
// ***************** Electron *****************
var electron      = require('electron')
var app           = electron.app                // Module to control application life.
var BrowserWindow = electron.BrowserWindow      // Module to create native browser window.
var ipcMain       = electron.ipcMain            // Module to communicate with renderer process
// ********************************************

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null

// Quit when all windows are closed.
app.on('window-all-closed', app.quit)

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function(){

  mainWindow = new BrowserWindow({ width: 600, height: 400, show: true })
	mainWindow.loadURL('file://' + upath.join( __dirname, '/html/index.html' ))

  function validate( data ){
    if( !data.name || !data.lastName ){
      mainWindow.send('ask-again')
    }
  }

  ipcMain.on('new-user-data', function( event, data ){
    console.log('User submitted', data)
    validate(data)
  })

  mainWindow.on('closed', function() { mainWindow = null })
})
