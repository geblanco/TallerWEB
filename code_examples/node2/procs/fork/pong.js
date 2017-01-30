'use strict'

// IPC channel
process.on('message', function( data ){

  console.log('Parent says:', data)
  if( data === 'ping' ){
    process.send('pong')
  }

})

