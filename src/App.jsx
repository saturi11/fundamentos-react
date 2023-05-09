import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Ex1_Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/Repeticao/ListaAlunos";
import TabelaProdutos from "./components/Repeticao/TabelaProdutos";
import "./App.css";
export default (_) => (
  <div className="App">
    <h2>Fundamentos React</h2>
    <div className="Cards">
    <Card titulo="#7 Tabela produtos" color="#562671">
        <TabelaProdutos>

        </TabelaProdutos>
      </Card>
    <Card titulo="#6 Lista Alunos" color="#8C133F">
        <ListaAlunos>

        </ListaAlunos>
      </Card>

      <Card titulo="#5 Componente com filhos" color="#F17979">
        <Familia sobrenome="Silva" >
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana"  />
            <FamiliaMembro nome="Gabriel" />
           
        </Familia>
      </Card>

      <Card titulo="#4 Desafio Aleatório" color="#22CCF1">
        <Aleatorio num1={1} num2={25} />
      </Card>

      <Card titulo="#3 Fragmento" color="#88f">
        <Fragmento />
      </Card>

      <Card titulo="#2 Com parametro" color="#22F137">
        <ComParametro
          titulo="Situacao do Aluno"
          aluno="Gabriel"
          nota={9.6}
        ></ComParametro>
      </Card>

      <Card titulo=" #1 Primeiro Componente" color="#F1228F">
        <Primeiro />
      </Card>
    </div>
  </div>
);
