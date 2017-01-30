'use strict'

var exec = require('child_process').exec

// Count number of js files
exec('ls *.js -l | wc -l', function( error, stdout, stderr ){
  if( error ){
    console.error('exec error:', error)
    return
  }
  console.log('stdout:', stdout)
  console.log('stderr:', stderr)
})