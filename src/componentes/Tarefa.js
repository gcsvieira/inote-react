import React, { Component } from "react";
import "./Tarefa.css";

class Tarefa extends Component {
  state = {
    descricao: this.props.descricao,
    altera: false,
  };
  iAltera = "./assets/edit1.png";

  render() {
    if (this.state.altera) {
      return (
        <li className="field secondary">
          <input
            type="text"
            value={this.state.descricao}
            onChange={this.alteraTarefa}
            onBlur={this.confirma}
            onKeyPress={this.teclaEnter}
            autoFocus
          />
        </li>
      );
    } else {
      return (
        <li className="secondary" style={this.estilo}>
          <span>{this.state.descricao}</span>
          <span className="buttonGroup end">
            <button onClick={this.edita} className="button primary">
              <img src={this.iAltera} alt="alterar" />
            </button>
          </span>
        </li>
      );
    }
  }
  alteraTarefa = (e) => {
    this.setState({
      descricao: e.target.value,
    });
  };

  confirma = () => {
    this.setState({
      altera: false,
    });
    this.props.onAltera(this.props.descricao, this.state.descricao);
  };

  edita = () => {
    this.setState({
      altera: true,
    });
  };

  teclaEnter = (e) => {
    if (e.key === "Enter") this.confirma();
  };
}

export default Tarefa;
