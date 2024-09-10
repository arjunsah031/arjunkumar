import React from 'react';
import CssStyle from './PaymentChildrenBox.module.css';


export default function PaymentChildrenBox({children}) {

    return (

        <div className={ CssStyle.Con }>

            {children }

        </div>

    );


}




