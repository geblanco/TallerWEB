'use strict'

var _privateVariable = 'this will be a private variable'
var publicVariable = 'this will be public'

module.exports.myString = publicVariable
module.exports.printPrivate = function(){
	console.log(_privateVariable)
}