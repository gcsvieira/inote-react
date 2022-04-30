import React from "react";
import Tarefas from "./componentes/Tarefas";
import Calendario from "./componentes/Calendario";
import NavBar from "./componentes/NavBar";
import BottomBar from "./componentes/BottomBar";
import Calendar from "react-calendar/dist/umd/Calendar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Calendario />
      <Tarefas />
      <BottomBar />
      <Calendar />
    </div>
  );
}

export default App;
