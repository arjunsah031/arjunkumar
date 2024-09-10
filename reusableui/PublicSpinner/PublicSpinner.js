import React from 'react';
import CssStyle from './PublicSpinner.module.css';


const PublicSpinner = props => {

    const cusStyle = {

        width: props.width ? props.width :  '40px',
        height: props.width ? props.width : '40px',
        borderWidth: props.borderWidth ? props.borderWidth : '1px',
        borderTop: props.borderWidth ? props.borderWidth : '1px',
        borderColor: props.borderColor ? props.borderColor : '#fff',
        


    }

    return <div className={ CssStyle.Loader } style={ cusStyle }></div>


}

export default PublicSpinner;


