import React, { Component } from "react";
import Tarefa from "./Tarefa";
import "./Tarefas.css";

class Tarefas extends Component {
  state = {
    novaTarefa: "",
  };
  imagem = "/assets/empty-folder.png";

  render() {
    return (
      <div className="component">
        {/* Verifica se está na tela de add tarefas. */}
        <div className={this.seSwitchIgualaAdd() ? "hidden" : ""}>
          <div className="componentHeader ">
            <h1 className="componentTitle">28 de Março de 2022</h1>
          </div>
        </div>
        <div className="componentContentTarefas">
          <div
            className={`${this.listaVazia() ? "hidden" : ""} ${
              this.seSwitchIgualaAdd() ? "hidden" : ""
            }`}
          >
            {/* Exibe a lista de tarefas. */}
            {this.listaDeTarefas()}
          </div>
          {/* Exibe uma tela caso não haja nenhuma tarefa adicionada. */}
          <div id="blank" className={this.listaVazia() ? "" : "hidden"}>
            <img className="nadaFazer" src={this.imagem} alt="empty folder" />
            <p>Nada a fazer neste dia.</p>
          </div>
          {/* Tela de adicionar tarefa. */}
          <div className={this.seSwitchIgualaAdd() ? "" : "hidden"}>
            <div className="component">
              <label>
                <h1>Título</h1>
              </label>
              <div className="field mt2">
                <input
                  value={this.state.novaTarefa}
                  onChange={this.trataNovaTarefa}
                  onKeyPress={this.teclaEnter}
                  type="text"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="buttonGroup mt2 end">
              <button
                type="submit"
                className="button quarter secondary mt2"
                onClick={this.visualizaHome}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="button quarter primary mt2"
                onClick={this.addTaskEvent}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Verifica se lista esta vazia.
  listaVazia() {
    return this.props.tarefas.length === 0;
  }

  // Método lista de tarefas.
  listaDeTarefas() {
    return (
      !this.listaVazia() && (
        <ul className={`list ${this.listaVazia() ? "hidden" : ""}`}>
          {this.props.tarefas.map((t) => (
            <Tarefa
              key={t}
              descricao={t}
              onAltera={this.props.onAltera}
              onApaga={this.props.onApaga}
              switchWindow={this.props.switchWindow}
            />
          ))}
        </ul>
      )
    );
  }

  // Confirmação por meio da tecla enter.
  teclaEnter = (e) => {
    if (e.key === "Enter") this.addTaskEvent();
  };

  // Trata nova tarefa da lista.
  trataNovaTarefa = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    });
  };

  // Adiciona nova tarefa a lista.
  adiciona = () => {
    if (this.state.novaTarefa === "") return;
    this.props.onAdiciona(this.state.novaTarefa);
    this.setState({
      novaTarefa: "",
    });
  };

  // Verifica se está na tela de add tarefa.
  seSwitchIgualaAdd = () => {
    if (this.props.switchWindow === "add") return true;
  };

  // Alterna para a página inicial.
  visualizaHome = () => {
    this.props.onVisualiza("home");
  };

  // Agrupa dois métodos em um para ser colocado em parâmetro onClick.
  addTaskEvent = () => {
    this.adiciona();
    this.visualizaHome();
  };
}

export default Tarefas;
