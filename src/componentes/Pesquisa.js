import React, { Component } from "react";
import Tarefa from "./Tarefa";

class Pesquisa extends Component {
  state = {};
  imagem = "/assets/empty-folder.png";

  render() {
    return (
      // Invoca método de resultado de pesquisa.
      <div
        className={`component ${this.props.pesquisa === "" ? "mt8" : "mt1"}`}
      >
        <div className={this.props.pesquisa === "" ? "hidden" : ""}>
          {this.resultadoPesquisa()}
        </div>
        {/* Caso a pesquisa não tenha sido feita ainda. */}
        <div id="blank" className={this.props.pesquisa === "" ? "" : "hidden"}>
          <Image
            className="nadaFazer"
            source={require(this.imagem)}
            alt="empty folder"
          />
          <p>Nada a foi pesquisado ainda.</p>
        </div>
      </div>
    );
  }

  // Retorna se o campo pesquisa está vazio.
  pesquisarTarefa = () => {
    if (this.state.pesquisa) return;
  };

  // Faz a pesquisa do campo.
  resultadoPesquisa() {
    const novaLista = this.props.tarefas.filter((job) =>
      Object.values(job).some((value) => value.includes(this.props.pesquisa))
    );

    return (
      <ul className={`list ${this.props.pesquisa ? "" : "hidden"}`}>
        {novaLista.map((t) => (
          <Tarefa
            key={t}
            descricao={t}
            onAltera={this.props.onAltera}
            onApaga={this.props.onApaga}
            switchWindow={this.props.switchWindow}
          />
        ))}
      </ul>
    );
  }
}

export default Pesquisa;
