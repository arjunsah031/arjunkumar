"use client"

import React, { useState } from "react";
import CssStyle from './About.module.css';
import AfterClick from "./AfterClick/AfterClick";
import BeforClick from "./BeforClick/BeforClick";

const About = () => {

    const [ state, setState ] = useState(false)

    const readmoreHandler = e => {

        setState( true)
    }

    return<section className={ CssStyle.Con }>

      { !state &&  <BeforClick onClick={ readmoreHandler }/>}

        { state && <AfterClick/>} 
        
    </section>
}

export default About;