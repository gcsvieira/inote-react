import React, { Component } from "react";
import Tarefa from "./Tarefa";
import "./Tarefas.css";

class Tarefas extends Component {
  state = {
    tarefas: [
      "Levar carro para oficina",
      "Consultar boleto do cartão",
      "Fazer compras",
    ],
    novaTarefa: "",
  };
  imagem = "/assets/empty-folder.png";

  render() {
    return (
      <div className="component">
        <div className="componentHeader">
          <h1 className="componentTitle">Visualizar Tarefas</h1>
        </div>
        <div className="componentContentTarefas">
          <div className={this.listaVazia() ? "hidden" : ""}>
            {this.listaDeTarefas()}
          </div>
          <div id="blank" className={this.listaVazia() ? "" : "hidden"}>
            <img className="nadaFazer" src={this.imagem} alt="empty folder" />
            <p>Nada a fazer neste dia.</p>
          </div>
          <div className="field mt2">
            <input
              value={this.state.novaTarefa}
              onChange={this.trataNovaTarefa}
              onKeyPress={this.teclaEnter}
              type="text"
              autoComplete="off"
            />
            <button onClick={this.adicionaTarefa} className="button primary">
              <img src="./assets/plus1.png" alt="adicionar" />
            </button>
          </div>
          <div className="mt2">
            <button onClick={() => console.log(this.state.tarefas)}>
              Estado
            </button>
          </div>
        </div>
      </div>
    );
  }

  listaVazia() {
    return this.state.tarefas.length === 0;
  }

  listaDeTarefas() {
    return (
      !this.listaVazia() && (
        <ul className={` list ${this.listaVazia() ? "hidden" : ""}`}>
          {this.state.tarefas.map((t, i) => (
            <Tarefa key={i} descricao={t} onAltera={this.alteraTarefa} />
          ))}
        </ul>
      )
    );
  }

  adicionaTarefa = () => {
    const novoVetorTarefas = [...this.state.tarefas, this.state.novaTarefa];
    this.setState({
      tarefas: novoVetorTarefas,
      novaTarefa: "",
    });
  };

  teclaEnter = (e) => {
    if (e.key === "Enter") this.adicionaTarefa();
  };

  trataNovaTarefa = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    });
  };

  alteraTarefa = (t, d) => {
    const i = this.state.tarefas.indexOf(t);
    const novaLista = [...this.state.tarefas];
    novaLista[i] = d;
    this.setState({
      tarefas: novaLista,
    });
  };
}

export default Tarefas;
