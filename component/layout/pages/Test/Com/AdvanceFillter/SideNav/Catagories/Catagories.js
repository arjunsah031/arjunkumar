import React from "react";
import CssStyle from './Catagories.module.css';

const Catagories = props => {

    return <div className={ CssStyle.MainCon }>

        <div className={ CssStyle.catagoryName }> CATAGORY </div>

        <div className={ CssStyle.Con }>

            <button onClick={ props.onclickplace} > PLACE </button>
            <button onClick={ props.onclickdish} > DICES </button>
 
        </div>

    </div>
}

export default Catagories;