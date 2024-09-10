import React from "react";
import CssStyle from './Emply.module.css';

const Emply = props => {

    return<div className={ CssStyle.Con }>

        <div>
            { props.name}
        </div>

        <div>
            { props.email}
        </div>

        <div>
            { props.contaictNumber}
        </div>

    </div>
}

export default Emply;