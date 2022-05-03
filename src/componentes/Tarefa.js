import React, { Component } from "react";
import "./Tarefa.css";

class Tarefa extends Component {
  state = {
    descricao: this.props.descricao,
    altera: false,
  };
  // Imagens
  iAltera = "./assets/edit1.png";
  iApaga = "./assets/delete1.png";

  render() {
    // Verifica caso tarefa esta em edição.
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
      // Retorna lista de tarefas.
    } else {
      return (
        <li style={this.estilo}>
          <span>{this.state.descricao}</span>
          <span className="buttonGroup end">
            <button
              onClick={this.edita}
              className={`button prussian ${
                this.seSwitchIgualaView() ? "" : "hidden"
              }`}
            >
              <Image source={require(this.iAltera)} alt="alterar" />
            </button>
            <button
              onClick={this.apaga}
              className={`button primary ${
                this.seSwitchIgualaView() ? "" : "hidden"
              }`}
            >
              <Image source={require(this.iApaga)} alt="apagar" />
            </button>
          </span>
        </li>
      );
    }
  }

  // Aplica a edição na tarefa.
  alteraTarefa = (e) => {
    this.setState({
      descricao: e.target.value,
    });
  };

  // Confirma edição na tarefa.
  confirma = () => {
    this.setState({
      altera: false,
    });
    this.props.onAltera(this.props.descricao, this.state.descricao);
  };

  // Executa método de apagar tarefa.
  apaga = () => {
    this.props.onApaga(this.props.descricao);
  };

  // Executa o state de alteração da tarefa.
  edita = () => {
    this.setState({
      altera: true,
    });
  };

  // Confirmação caso pressione tecla Enter.
  teclaEnter = (e) => {
    if (e.key === "Enter") this.confirma();
  };

  // Aciona os botões de edição e exclusão caso a tela esteja no modo visualizar tarefas.
  seSwitchIgualaView = () => {
    if (this.props.switchWindow === "view") return true;
  };
}

export default Tarefa;
