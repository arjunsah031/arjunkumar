"use client"

import React from 'react';
import CssStyle from './PaySpinner.module.css';


export default function PaySpinner ( props) {

    const cusStyle = {

        width: props.width ? props.width :  '35px',
        height: props.width ? props.width : '35px',
        borderWidth: props.borderWidth ? props.borderWidth : '1px',
        borderTop: props.borderWidth ? props.borderWidth : '1px',
        borderColor: props.borderColor ? props.borderColor : '#fff'
    }


    return <div className={ CssStyle.Loader } style={ cusStyle }></div>;
 
}


