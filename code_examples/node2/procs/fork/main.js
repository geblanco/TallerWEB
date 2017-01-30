'use strict'

var fork = require('child_process').fork
var child = fork('./pong.js')
child.on('message', function( data ){
  console.log('Child says:', data)
})

child.send('ping')
