'use strict'

var spawn = require('child_process').spawn

// List files
var child = spawn('ls', ['-l'])
child.stdout.on('data', function( data ){
  console.log('stdout:\n\n', data.toString('utf8'))
})

child.stderr.on('data', function( err ){
  console.log('spawned child errored', err.toString('utf8'))
})

child.on('close', function( exitCode ){
  console.log('spawned child ended with code', exitCode)
})
