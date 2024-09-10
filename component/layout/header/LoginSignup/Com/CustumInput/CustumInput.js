"use client"

import React  from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import InputTIttle from "../InputTIttle/InputTIttle";
import CssStyle from './CustumInput.module.css';

const CustumInput = props => {

    return <div className={ CssStyle.Con } >

        <InputTIttle
            InputTittl={props.tittle}
        />

        <div className={ CssStyle.InputCon } >

            <input 

                className={ CssStyle.Input}
                type=" text "
                placeholder={ props.placeholder }
                onChange={ props.onChange }
                value={ props.value }

            />

        </div>

        <ErrorMessage error={ props.errorMessage}/>

    </div>
}

export default CustumInput;