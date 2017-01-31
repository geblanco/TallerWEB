'use strict'

var fs = require('fs')
var async = require('async')

module.exports = function( path ){
	async.waterfall([

		function( callback ){
			console.log('cb 1')
			fs.readdir(path, callback)
		},
		function( prevResult, callback ){
			console.log('cb 2')
			console.log(prevResult)
			fs.readdir(prevResult[0], callback)
		}
	], function( err, result ){
		console.log('End cb', err, '\nres', result)
	})
}