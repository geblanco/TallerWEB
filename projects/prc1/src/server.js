'use strict'

const path    = require('path')
const express = require('express')
const ifaces  = require('os').networkInterfaces()
const error   = require(path.join(__dirname, 'routes/error404'))
const port    = require(path.join(__dirname, 'package.json')).config.port
const app     = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/favicon.ico', error)
app.get('/*', require(path.join(__dirname, 'routes/index')))
app.all('*', error)

app.listen( port, function(){
  console.log('Serving ./ at:')
  Object.keys(ifaces).forEach(function( dev ){
	  ifaces[ dev ].forEach(function( details ){
      if( details.family.toLowerCase() === 'ipv4' ){
        console.log(`  http://${details.address}:${port}`)
      }
    })
  })
})
