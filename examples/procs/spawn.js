'use strict'

var spawn = require('child_process').spawn
var child = spawn('node', ['spawner.js'])

child.stdout.on('data', function( data ){
	console.log('Parent says, from child', data.toString('utf8'))
})

child.stdin.write('BUFFER', { id: 5 })