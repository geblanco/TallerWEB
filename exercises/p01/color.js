'use strict'

// parameters 30-37 selected the foreground color,
// while 40-47 selected the background
// https://en.wikipedia.org/wiki/ANSI_escape_code
var _colors = {
    black: '\x1b[30m'
  , red: '\x1b[31m'
  , green: '\x1b[32m'
  , yellow: '\x1b[33m'
  , blue: '\x1b[34m'
  , magenta: '\x1b[35m'
  , cyan: '\x1b[36m'
  , white:'\x1b[37m'
  , _bright_: '\x1b[1m'
  , _reset_: '\x1b[39;49m'
  , _not_bright_: '\x1b[0m'
}

function _color( str, color, bright ) {

  var ret = str
  if( _colors.hasOwnProperty( color.toLowerCase() ) ){
    ret = (
      _colors[ color.toLowerCase() ] +
      (bright ? _colors[ '_bright_' ] : '') +
      String(str) +
      _colors[ '_reset_' ] +
      _colors[ '_not_bright_']
    )
  }
  return ret
}

module.exports = {
    color: _color
  , black: function( str, bright ){ return _color( str, 'black', bright ) }
  , red: function( str, bright ){ return _color( str, 'red', bright ) }
  , green: function( str, bright ){ return _color( str, 'green', bright ) }
  , yellow: function( str, bright ){ return _color( str, 'yellow', bright ) }
  , blue: function( str, bright ){ return _color( str, 'blue', bright ) }
  , magenta: function( str, bright ){ return _color( str, 'magenta', bright ) }
  , cyan: function( str, bright ){ return _color( str, 'cyan', bright ) }
  , white: function( str, bright ){ return _color( str, 'white', bright ) }
}
