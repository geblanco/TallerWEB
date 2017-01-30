'use strict'

function SingletonObject( name ){
	this.name = name
}

SingletonObject.prototype.sayHello = function() {
	console.log('Hello!\nMy name is', this.name)
};

var _singleton = null

module.exports = function( name ){

	if( !_singleton ){
		_singleton = new SingletonObject( name )
	}

	return _singleton
}