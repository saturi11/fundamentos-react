import React,{useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {

    const [nome,setNome] = useState('sei não')
    const [idade,setIdade] = useState(0)
    const [nerd,setNerd] = useState(false)

    function fornecerInfo(nome,idade,nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }



  return (
    <div>
        <dvi>
            <span>{nome} </span>
            <span>{idade} </span>
            <span> {nerd?'verdadeiro':'falso'}</span>
        </dvi>
      <IndiretaFilho onClick={fornecerInfo}></IndiretaFilho>
    </div>
  );
};
