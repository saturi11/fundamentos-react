import React, { useState } from "react";

export default (props) => {
  function Gerar(props) {
    let valores = [];
   // let qtd = props.qtde;
    let aleatorio;
    for (let i = 0; i < qtde; i++) {
      aleatorio = Math.floor(Math.random() * (60 - 1));
      valores.includes(aleatorio)
        ? (aleatorio = Math.floor(Math.random() * (60 - 1)))
        : valores.push(aleatorio);
    }
    valores.sort(function (a, b) {
      if (a < b) {
        return -1;
      } else {
        return true;
      }
    });
    return valores;
  }

  const [qtde, serQtde] = useState(props.qtde ||6);


  const [valores, serNumero] = useState(Array(qtde).fill(0));
  return (
    <div>
      <h2>Mega</h2>
      <h3>{valores.join(' ')}</h3>
      <div>
      <label> Quantos Números deseja ?</label>
      <input type="number" value={qtde}
      onChange={e =>serQtde(+e.target.value)}/> 
      </div>
      
      <button onClick={_ =>serNumero(Gerar(qtde))}>Gerar Números</button>
    </div>
  );
};
