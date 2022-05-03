import React, { Component } from "react";
import { IconContext } from "react-icons";
import { MdSettings } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

class NavBar extends Component {
  state = {
    addtask: false,
    pesquisa: "",
  };

  render() {
    // Switch que renderiza a barra de navegação de acordo com o componente que o usuário está interagindo.
    switch (this.props.switchWindow) {
      // Barra de navegação inicial.
      case "home":
        return (
          <header>
            <div className="headerBar ">
              <h1 className="appName">iNote</h1>
              <div className="mdIcons">
                <IconContext.Provider value={{ size: "2.2rem" }}>
                  <button
                    className="button primary mr0-6"
                    onClick={this.visualizaSearch}
                  >
                    <MdSearch />
                  </button>
                  <button className="button primary mr0-6">
                    <MdSettings />
                  </button>
                </IconContext.Provider>
              </div>
            </div>
          </header>
        );
      // Barra de navegação de adicionar tarefa.
      case "add":
        return (
          <header className="headerBar nextToArrow">
            <IconContext.Provider value={{ size: "2.2rem" }}>
              <button
                className="button primary ml1 mdIcons"
                onClick={this.visualizaHome}
              >
                <MdKeyboardArrowLeft />
              </button>
            </IconContext.Provider>
            <h1 className="appName">Adicionar tarefa</h1>
          </header>
        );
      // Barra de navegação de pesquisar tarefa.
      case "search":
        return (
          <div>
            <header className="headerBar">
              <IconContext.Provider value={{ size: "2.2rem" }}>
                <button
                  className="button primary ml1 mdIcons"
                  onClick={this.visualizaHome}
                >
                  <MdKeyboardArrowLeft />
                </button>
              </IconContext.Provider>
              <input
                placeholder="Pesquise aqui a sua tarefa"
                value={this.props.pesquisa}
                onChange={this.props.onTrataPesquisa}
                className="fieldText ml2"
                type="text"
              />
            </header>
          </div>
        );
      // Barra de navegação de visualizar tarefa
      case "view":
        return (
          <header className="headerBar nextToArrow">
            <IconContext.Provider value={{ size: "2.2rem" }}>
              <button
                className="button primary ml1 mdIcons"
                onClick={this.visualizaHome}
              >
                <MdKeyboardArrowLeft />
              </button>
            </IconContext.Provider>
            <h1 className="appName">Visualizar tarefas</h1>
          </header>
        );
      default:
        return this.props.switchWindow === "home";
    }
  }

  // Alterna para a tela de visualizar tarefas.
  visualizaSearch = () => {
    this.props.onVisualiza("search");
  };

  // Alterna para a página inicial.
  visualizaHome = () => {
    this.props.onVisualiza("home");
  };
}

export default NavBar;
