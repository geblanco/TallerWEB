'use strict'

process.stdin.on('data', function(data ){
	console.log('From Parent', data.toString('utf8'))
})

setTimeout(function(){
	process.stdout.write('CD')
}, 60 * 1000)