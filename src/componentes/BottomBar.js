import React, { Component } from "react";

class BottomBar extends Component {
  state = {};

  render() {
    return (
      // Botões da barra inferior
      <div>
        <div className="bottomButtons">
          <div className="buttonGroup mt2">
            <button
              type="submit"
              className="button secondary mt1"
              onClick={this.visualizaView}
            >
              Visualizar Tarefas
            </button>
            <button
              type="submit"
              className="button primary mt1"
              onClick={this.visualizaAdd}
            >
              Adicionar Tarefa
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Alterna para a tela de visualizar tarefas.
  visualizaView = () => {
    this.props.onVisualiza("view");
  };

  // Alterna para a tela de adicionar tarefas.
  visualizaAdd = () => {
    let view = "add";
    this.props.onVisualiza(view);
  };
}

export default BottomBar;
