'use strict'

var fs = require('fs')

module.exports = function( path, callback ){
	fs.readdir(path, function(err, result){
		if( err ){
			callback( err )
		}else{
			for(var i = 0; i < result.length; i++){
				result[i] = 'modified ' + result[i]
			}
			callback(null, result)
		}
	})
}