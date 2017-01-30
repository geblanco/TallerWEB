'use strict'

var spawn = require('child_process').spawn
var child = spawn('ls', ['-l'])

// listen 'data' event on stdout pipe
child.stdout.on('data', ...)
// listen 'close' event on child process
child.on('close', ...)
