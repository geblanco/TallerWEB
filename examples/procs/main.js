'use strict'

var exec = require('child_process').exec
var cmd = 'wget '
var fallback = 'http://192.168.43.179:8080/footer.ejs'

cmd += process.argv.length > 2 ? process.argv[2] : fallback

exec(cmd, function(err, stdout, stderr){
	console.log('Error', err)
	console.log('StdOut', stdout)
	console.log('StdError', stderr)
})