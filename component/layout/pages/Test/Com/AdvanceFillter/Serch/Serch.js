import React from "react";
import CssStyle from './Serch.module.css';

const Serch = props => {

    return<div className={ CssStyle.Con }>

        <input

            type='text'
            placeholder="serch.."
            onChange={ props.onChange }
            className={CssStyle.input}
            
            
        />

    </div>
}

export default Serch;