import React from "react";
import CssStyle from './Box.module.css';

const  Box = props => {

    return <div className={ CssStyle.Con } >

        { props.children}

    </div>
}

export default Box;