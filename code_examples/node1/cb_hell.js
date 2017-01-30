// callback hell
function addUserMetadata( userInfo, metadata, callback ){

  userLogIn(userInfo, function( err, session ){

    if( err ){
      return callback('403 - Forbidden')
    }

    session.getMetadata(function( err, oldMeta ){

      if( err ){
        return callback('503 - Back end fetch failure')
      }

      // handle update
      // ...
      session.update( oldMeta, metadata, function( err, newSize ){
        
        if( err) {
          return callback('401 - Unauthorized')
        }

        callback( null, newSize )

      })// update
    })// getMetadata
  })// userLogIn
}// addUserMetadata

function updateMeta( session, metadata, callback ){

  session.getMetadata(function( err, oldMeta ){

    if( err ){
      return callback('503 - Back end fetch failure')
    }

    // handle update
    // ...
    session.update( oldMeta, metadata, function( err, newSize ){
      
      if( err) {
        return callback('401 - Unauthorized')
      }

      callback( null, newSize )

    })// update
  })// getMetadata
}// updateMeta

// callback hell
function addUserMetadata( userInfo, metadata, callback ){

  userLogIn(userInfo, function( err, session ){

    if( err ){
      return callback('403 - Forbidden')
    }

    updateMeta( session, metadata, callback )

  })// userLogIn
}// addUserMetadata

// async vs sync
function renameFiles( path, callback ){

  fs.readdir( path, function( err, files ){

    if( err ){
      return callback( err )
    }

    // Synchronous, blocking forEach loop
    files.forEach(function( file, index ){

      // Asynchronous, non-blocking function call
      fs.rename(file, getNewName(file, index), function( err, newName ){

        if( err ){
          console.log('Errored renaming file:', file)
          // called once for each error: unwanted behaviour
          callback( err )
        }else{
          console.log('Succesfully renamed file:' file, 'to:', newName)
          // called once for each succesful: unwanted behaviour
          callback( null )
        }
      
      })// rename
    })// forEach
  })// readdir
}// renameFiles
