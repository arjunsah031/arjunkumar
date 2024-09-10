import React from "react";
import CssStyle from './AfterLogin.module.css';

import PDhandler from "./PDhandler/PDhandler";

import CommonNav from "../CommonNav/CommonNav";

const AfterLogin = () => {
    
    return <ul className={ CssStyle.Con } >

        <CommonNav/>

        <PDhandler/>

    </ul>

}

export default AfterLogin;