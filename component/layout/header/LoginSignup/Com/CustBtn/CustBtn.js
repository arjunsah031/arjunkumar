import React from "react";
import PublicSpinner from "@/reusableui/PublicSpinner/PublicSpinner";
import CssSyle from './CustBtn.module.css';


export default function CustBtn (props) {

    let containData = <button onClick={ props.onClick } className={ CssSyle.Btn}> { props.btnName } </button>

    if( props.isClickedBtn) {

        containData = <div className={CssSyle.Loder}>
            <PublicSpinner  />
            {/* <div className={ CssSyle.LogintText}> Logining.</div> */}
        </div>
        
    }
    

    return <div className={ CssSyle.Con } >

        { containData}
        
    </div>
}
