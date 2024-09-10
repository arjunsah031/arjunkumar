import React, { useState } from "react";
import CssStyle from './ChakeBoxBtn.module.css';

const ChakeBoxBtn = props => {

    return <div className={ CssStyle.Con }>

        <label> { props.label }</label>
        <input 
            type="checkbox" 
            name={ props.name} 
            checked={ props.checked }  
            onChange={ props.onChange} /> 


    </div>
}

export default ChakeBoxBtn;