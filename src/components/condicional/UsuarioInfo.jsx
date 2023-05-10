import React from "react";
import If ,{Else}from "./If";
export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>seja bem vindo {usuario.nome}
        <Else>
            coloca o nome na moral
        </Else>
      </If>

    </div>
  );
};
