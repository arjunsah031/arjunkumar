import React from "react";
import CssStyle from './Animation.module.css';

import Animations from "./Animations/Animations";
import Transform from "./Transform/Transform";
import Transition from "./Transition/Transition";

const Animation = () => {

    return <section className={ CssStyle.Con } >

        <Animations/>

        <Transition/>
       
       <Transform/>


    </section>
}

export default Animation;