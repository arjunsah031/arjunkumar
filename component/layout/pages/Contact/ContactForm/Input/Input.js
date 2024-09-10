'use client';
import React  from "react";
import CssStyle from './Input.module.css';

const Input = props  => {

    return <div className={ CssStyle.Con }>

        <label> { props.label } </label>
        <input 

            type={ props.type} 
            placeholder={ props.placeholder } 
            onChange={ props.onChange} 
            className={ `${props.className}`}
            value={ props.value}
        />

    </div>
}

export default Input;