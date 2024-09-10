 import React from 'react';
 import CssStyle from './CustBtn.module.css';

 const CustBtn = props => {

    return <button

                 className={ `${CssStyle.Con } ${ props.className}`}
                 onClick={ props.onClick }
                 
                 > 

                 {props.BtnName} 

            </button>

 }

export default CustBtn;