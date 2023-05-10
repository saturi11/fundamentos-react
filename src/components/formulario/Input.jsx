import React, {useState}from "react";
import "./Input.css"
export default props =>{
    const [valor,setValor] = useState('inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }
    return(
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/>
        </div>
    )
   
}
