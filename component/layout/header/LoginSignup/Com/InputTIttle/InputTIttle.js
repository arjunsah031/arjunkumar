import React from "react";
import CssStyle from './InputTIttle.module.css';

const InputTIttle = props => {

    return <div className={ CssStyle.Con } >

                { props.InputTittl}
                
            </div>

}

export default InputTIttle;