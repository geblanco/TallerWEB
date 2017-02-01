'use strict'

// Dependencies
var fs = require('fs')
var path = require('path')

// Extract entry arguments
// [ callerBinary, program path, <rest_of_arguments> ]
var args = Array.from(process.argv)
var tree = null

var basePath = path.join(path.dirname(args[1]), 'trees')

function usage( args, errCode ){
  console.log('Usage: ' + args[0] + ' ' + args[1] + ' <tree_file>')
  process.exit( errCode || 255 )
}

function readFile( treePath ){
  var aux = null
  try{ aux = fs.readFileSync( path.resolve(treePath) ) }
  catch( e ){ aux = null }
  finally{ return aux }
}

function getTree( tree ){
  var aux = null
  try{ aux = JSON.parse( readFile(tree) ) }
  catch( e ){ aux = null }
  finally{ return aux }
}

function createDirectory( newPath ){
  var ret = null
  try{ fs.mkdirSync( newPath ) }
  catch( e ){ ret = e }
  finally{ return ret }
}

function createFile( newPath ){
  var ret = null
  try{ fs.writeFileSync(newPath) }
  catch( e ){ ret = e }
  finally{ return ret }
}

function createDirContents( currPath, contents ){
  var errored = null
  if( !(contents instanceof Array) ){
    contents = [ contents ]
  }
  for(var i = 0; i < contents.length && !errored; i++ ){
    var fd = contents[ i ]
    if( fd.type === 'file' ){
      errored = createFile( path.join(currPath, fd.name) )
    }else{
      var nextPath = path.join(currPath, fd.name)
      errored = createDirectory( nextPath )
      if( !errored && fd.contents.length ){
        errored = createDirContents( nextPath, fd.contents )
      }
    }
  }
  
  return errored
}

// If no argument provided, nothing to do, exit
if( args.length < 3 ){
  usage( args )
}else if( !fs.existsSync( args[2] ) ){
  // Test good file
  console.log('Invalid json file!\n\n')
  usage( args, 256 )
}else if( !(tree = getTree(args[2])) ){
  // Test good json tree
  console.log('Invalid json tree!\n\n')
  usage( args, 257 )
}

if( !fs.existsSync(basePath) ){
  fs.mkdirSync(basePath)
}

console.log('Read file from:', path.resolve(args[2]))
console.log(JSON.stringify(tree, null, 2), '\n\n=> OK')
console.log('Recreating directories...')

tree.forEach(function(fd){
  if( fd.name === '.' ){
    // Directory from where the tree was taken
    fd.name = 'root_dir'
  }
  var newPath = path.join(basePath, fd.name)
  if( createDirectory( newPath ) ){
    console.log('Unable to create root directory')
    process.exit( 258 )
  }
  var exitCode = createDirContents( newPath, fd.contents ) || 0
  console.log('Ended with', exitCode, 'exit code')
  process.exit( exitCode )
})