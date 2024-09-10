import React from "react";
import CssStyle from './ExpiryCvcChildren.module.css';

const ExpiryCvcChildren = props => {

    return <div className={ CssStyle.Con }>

        <div className={ CssStyle.First }>{ props.expiryCom }</div>

        <div className={ CssStyle.Second }>{ props.cvcCom }</div>

    </div>


}

export default ExpiryCvcChildren;


