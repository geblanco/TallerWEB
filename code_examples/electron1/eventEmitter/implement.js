'use strict'

// Get the original object
var EventEmitter = require('events').EventEmitter

// Create constructor
var MyEmitter = function( name ){
  this.name = name || 'Custom Emitter'
}

// Inherit prototype
MyEmitter.prototype = Object.create(EventEmitter.prototype)

// Add method
MyEmitter.prototype.sayHello = function(){
  this.emit('hello', 'My name is ' + this.name)
}

// Instantiate object
var myEmitter = new MyEmitter('John')
// Listen for hello event
myEmitter.on('hello', function( greet ){
  // Greet should be: "My name is John"
  console.log('\nCustom Object says:\n"' + greet + '"\n')
})

// Ask for emit
myEmitter.sayHello()