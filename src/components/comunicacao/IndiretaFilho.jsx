import React from "react";

export default (props) => {
    const min = 50
    const max = 80
    const gerarIdade = ()=>parseInt(Math.random()*(30)+50) 
  return (
    <div>
      <div>filho</div>
      <button
        onClick={ e =>props.onClick("João", gerarIdade, true)}>
        Fornecer info
      </button>
    </div>
  );
};
