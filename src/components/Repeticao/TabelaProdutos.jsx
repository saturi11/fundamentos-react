import React from "react";
import produto from "../../data/produto";
import "./Tabela.css";

export default () => {
  return (
    <div>
      <table>
        <caption>produto</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {produto.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
