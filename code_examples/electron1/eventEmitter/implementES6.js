'use strict'

// Get the original object
var EventEmitter = require('events').EventEmitter

// Create class
class MyEmitter extends EventEmitter {
  // Initialize super class
  constructor(name){
    super()
    this.name = name || 'Custom Emitter'
  }
  // Add method
  sayHello(){
    this.emit('hello', 'My name is ' + this.name)  
  }
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