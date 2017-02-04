'use strict'

const fs   = require('fs')
const path = require('path')
const cookie = require('cookie')
const cwd  = process.cwd()

const _storeCwdCookie = ( res, path ) => {
  res.setHeader('Set-Cookie', cookie.serialize('cwd', path, {
      httpOnly: true
    , path: '/'                 // Ensures the cookie does not get duplicated
    , maxAge: 60 * 60 * 24 * 7  // 1 week 
  }))
}

const _storeNavigateCookie = ( res ) => {
  res.append('Set-Cookie', cookie.serialize('navigating', true, {
    httpOnly: true
  }))
}

const _sendDir = function( req, res, searchPath ){
  fs.readdir(searchPath, function( err, files ){

    if( err ){
      return res.sendStatus(503)
    }

    _storeCwdCookie( res, req.path )

    res.render('header.ejs', {
      title: 'Index of: ' + req.path,
      back: path.dirname(req.path),
      files: files.map(function( file ){
        return {
          name: file,
          path: path.join(req.path, file)
        }
      })
    })
  })
}

const _insertCookie = function( req, res ){
  var cookies = cookie.parse(req.headers.cookie || req.cookie || '')
  if( Object.keys(cookies).length ){
    return false
  }
  _storeCwdCookie( res, req.path )
  // Not setting maxAge makes the cookie to be removed on browser close
  _storeNavigateCookie( res )
  // Redirect back after setting cookie 
  res.redirect(req.headers.referer || '/')
  return true
}

const _notFirstime = function( req, res ){
  var cookies = cookie.parse(req.headers.cookie || req.cookie || '')
  // If we were navigating, just set the path cookie
  if( !cookies.navigating ){
    _storeNavigateCookie( res )
    // else, we navigated before, and restarted from here
    res.statusCode = 302
    res.redirect(cookies.cwd)
    return true
  }
  return false
}

module.exports = function( req, res ){
  var searchPath = path.join(cwd, req.path)
  console.log('Hit', req.path)
  // console.log('SearchPath', searchPath)
  if( !fs.existsSync(searchPath) ){
    res.sendStatus(404)
  }else if( fs.statSync(searchPath).isFile() ){
    res.download(searchPath, path.basename(req.path))
  }else if( _insertCookie( req, res ) || _notFirstime( req, res ) ){
    res.end()
  }else{
    _sendDir(req, res, searchPath)
  }
}