import React from "react";
import CssStyle from './BirthDayText.module.css';

const BirthDayText = props =>  {

   return<div className={ `${CssStyle.BirCon} ${props.className}` }>

                    <div> { props.children } </div>
    </div>


}

export default BirthDayText;