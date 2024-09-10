import React from "react";
import BirthDayText from "../BirthDayText/BirthDayText";
import CssStyle from './Container.module.css';

const Container = props  => {

    return <div className={ `${CssStyle.ConTainer} ${props.className}` }>

            <BirthDayText className={ CssStyle.textstyle }>

                <div style={{ fontSize : '14px'}}>HOVER ME</div>

            </BirthDayText>

           
    
    </div>
}

export default Container;