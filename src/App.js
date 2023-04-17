import React, { useState } from "react";

// Import toasts
import { toast } from "react-toastify";

// Imports components
import Container from "../src/components/Container";
import Titulo from "./components/Titulo";
import CampoDigita from "./components/CampoDigita";
import Tarefas from "./components/Tarefas";
import Rodape from "./components/Rodape";

export default function App() {
  const [value, setValue] = useState("");
  const [dados, setDatos] = useState([]);

  const onSubmit = () => {
    if (value !== "") {
      setDatos([
        ...dados,
        {
          id: Date.now(),
          title: value,
          checked: false,
        },
      ]);
      toast.success("Tarefa Criada!");
      setValue("");
    } else {
      toast.error("Voce não pode enviar campo vazio!");
    }
  };

  const onClick = (objeto) => {
    setDatos(
      dados.map((dado) =>
        dado.id === objeto.id
          ? {
              ...dado,
              checked: !objeto.checked,
            }
          : dado
      )
    );
  };

  const onDelete = (objeto) => {
    setDatos(dados.filter((item) => item.id !== objeto.id));
    toast.success("Tarefa Removida!");
  };

  return (
    <Container>
      <Titulo />
      <CampoDigita value={value} setValue={setValue} onSubmit={onSubmit} />
      <Tarefas dados={dados} onClick={onClick} onDelete={onDelete} />
      <Rodape />
    </Container>
  );
}
