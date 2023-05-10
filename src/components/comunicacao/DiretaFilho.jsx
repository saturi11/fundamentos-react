import React from "react";

export default props =>{
    return(
        <div>
            <div>{props.texto}</div>
            <div>{props.numero}</div>
            <div>{props.bool? 'verdadeiro':'falso'}</div>
        </div>
    )
}