import React from "react";
import CssStyle from './ErrorMessage.module.css';

const ErrorMessage = props  => {

    return <div className={ CssStyle.Con } > 

                { props.error }
        </div>
}
export default ErrorMessage;
