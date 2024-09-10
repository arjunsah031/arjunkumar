import React from "react";
import BirthDayText from "./BirthDayText/BirthDayText";
import Container from "./Container/Container";
import CssStyle from './VerticalSqure.module.css';

const VerticalSqure = () => {
    


    return <section className={ CssStyle.Con } >

        <div className={ CssStyle.Model }>

            <Container className={CssStyle.ConTainer}/>

        </div>
        
    </section>
}

export default VerticalSqure;