package controllers;

// Imported from other modules
import models.GameModel;

public class ControllerBase {

  // Private, not exposed
  private int COLS;
  private int ROWS;
  private GameModel gameModel;
  // ************************
  
  // Public, exposed
  public ControllerBase(){
      this.gameModel = new GameModel();
      this.ROWS = this.gameModel.getRows();
      this.COLS = this.gameModel.getColumns();
  }

  public boolean isGameFinished(){
      return this.gameModel.getStatus() >= 0;
  }

  public GameModel getModel(){ return this.gameModel; }
  // ************************
}
