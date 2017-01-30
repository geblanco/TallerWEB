'use strict'

// Imported from other modules
var GameModel = require('models/GameModel')

// Private, not exposed
var gameModel
var ROWS
var COLS
// ************************

var ControllerBase = function(){
  gameModel = new GameModel()
  ROWS = this.gameModel.getRows()
  COLS = this.gameModel.getColumns()
}

ControllerBase.prototype.isGameFinished = function() {
  return gameModel.getStatus() >= 0
}

ControllerBase.prototype.getModel = function() {
  return gameModel
}

// Expose the class
module.exports = ControllerBase