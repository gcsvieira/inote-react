import React, { Component } from "react";
import Tarefas from "./componentes/Tarefas";
import Calendario from "./componentes/Calendario";
import NavBar from "./componentes/NavBar";
import BottomBar from "./componentes/BottomBar";
import Pesquisa from "./componentes/Pesquisa";

class App extends Component {
  state = {
    tarefas: [
      "Levar carro para oficina",
      "Consultar boleto do cartão",
      "Fazer compras",
    ],
    novaTarefa: "",
    // State que verificará qual tela renderizar.
    switchWindow: "home",
    pesquisa: "",
  };
  render() {
    // Switch que verifica qual tela renderizar.
    switch (this.state.switchWindow) {
      // Tela de visualizar tarefas.
      case "view":
        return (
          <div>
            <NavBar
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
            />
            <Tarefas
              tarefas={this.state.tarefas}
              onAdiciona={this.adicionaTarefa}
              onAltera={this.alteraTarefa}
              onApaga={this.apagaTarefa}
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
            />
          </div>
        );
      // Tela inicial.
      case "home":
        return (
          <div className="App">
            <NavBar
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
            />
            <Calendario onGetDate={this.getDate} />
            <Tarefas
              tarefas={this.state.tarefas}
              onAdiciona={this.adicionaTarefa}
              onAltera={this.alteraTarefa}
              onApaga={this.apagaTarefa}
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
            />
            <BottomBar
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
            />
          </div>
        );
      // Tela de pesquisar tarefas.
      case "search":
        return (
          <div>
            <NavBar
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
              pesquisa={this.state.pesquisa}
              onTrataPesquisa={this.trataNovaPesquisa}
            />

            <Pesquisa
              tarefas={this.state.tarefas}
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
              pesquisa={this.state.pesquisa}
            />
          </div>
        );
      // Tela de adicionar tarefas.
      case "add":
        return (
          <div>
            <NavBar
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
            />
            <Tarefas
              tarefas={this.state.tarefas}
              onAdiciona={this.adicionaTarefa}
              onVisualiza={this.visualiza}
              switchWindow={this.state.switchWindow}
            />
          </div>
        );
      // Demais cases.
      default:
        return this.setState({
          switchWindow: "home",
        });
    }
  }

  // Método de adicionar tarefa.
  adicionaTarefa = (t) => {
    const novoVetorTarefas = [...this.state.tarefas, t];
    this.setState({
      tarefas: novoVetorTarefas,
    });
  };

  // Método de alterar tarefa.
  alteraTarefa = (t, d) => {
    const i = this.state.tarefas.indexOf(t);
    const novaLista = [...this.state.tarefas];
    novaLista[i] = d;
    this.setState({
      tarefas: novaLista,
    });
  };

  // Método de apagar tarefa.
  apagaTarefa = (t) => {
    const novaLista = this.state.tarefas.filter((tarefa) => tarefa !== t);
    this.setState({
      tarefas: novaLista,
    });
  };

  // Método que aplica qual tela será renderizada.
  visualiza = (s) => {
    this.setState({
      switchWindow: s,
    });
  };

  // Método que trata a pesquisa
  trataNovaPesquisa = (evento) => {
    this.setState({
      pesquisa: evento.target.value,
    });
  };
}

export default App;
