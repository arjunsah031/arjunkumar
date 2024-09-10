
import React from "react";
import CustBtn from "@/reusableui/CustBtn/CustBtn";
import PublicSpinner from "@/reusableui/PublicSpinner/PublicSpinner";
import CssStyle from './Contactformbtn.module.css';

const Contactformbtn = props => {

    let containdata = <React.Fragment>

        <CustBtn

            className={ CssStyle.Btn}
            BtnName = { props.BtnName}
            onClick = { props.onClick }

        />

    </React.Fragment>

    if( props.isspining ) {

        containdata = <PublicSpinner

                        width = '25px'
                        height = '25px'
        
        />
    }

    if( props.issucess ) {

        containdata = <div className={ CssStyle.SucessMessage}> { props.issucess} </div>
    }

    return <div className={ CssStyle.Con } >

       {  containdata }

    </div>
}

export  default Contactformbtn;