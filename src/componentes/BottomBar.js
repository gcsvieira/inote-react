import React, { Component } from "react";

class BottomBar extends Component {
  render() {
    return (
      <div>
        <div className="bottomButtons">
          <div className="buttonGroup mt2">
            <button
              type="submit"
              id="delete-task"
              className="button secondary mt1"
              onClick=""
            >
              Deletar Tarefa
            </button>
            <button
              type="submit"
              id="add-task "
              className="button primary mt1"
              onClick=""
            >
              Adicionar Tarefa
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomBar;
