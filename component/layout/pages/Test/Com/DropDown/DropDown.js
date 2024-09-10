"use client"
import React, { useState } from "react";
import CssStyle from './DropDown.module.css';

const DropDown = () => {

    const[ state, setState ] = useState( false )

    const DropDownHandler = () => {

        setState( s => !s );   
    }

    const[ selectValue, setselectValue ] = useState('nothing')

    const selectHandler = (e) => {

        setselectValue(e.target.value)
        setState(false)
    }

    return <section className={ CssStyle.Con } >

        <div className={ CssStyle.DropDownCon } >

            <div onClick={ DropDownHandler } className={ CssStyle.DropDown } name="cars" id="cars"  > { selectValue} </div>

            { state && <div className={ CssStyle.Container } > 
                   
                   <button onClick={ selectHandler } value="arjun">ARJUN</button>
                   <button onClick={ selectHandler  } value="ranjay"> RANJAY</button>
                   <button onClick={ selectHandler  } value="mukesh">MUKESH</button>
                   <button onClick={ selectHandler  } value="bikash"> BIKASH</button>
                   
           </div>}

        </div>

    </section>
}

export default DropDown;