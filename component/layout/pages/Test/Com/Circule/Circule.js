"use client"
import React, { useState } from "react";
import CssStyle from './Circule.module.css';

const Circule = () => {

    const[ s, sets ] = useState(0)

    const BackBtnHandler = () => {

        sets( s - 45 )  
        
    }

    const NextBtnHandler = () => {

        sets( s + 45 )
    
    }


    return <div className={ CssStyle.Con } >

            <div className={ CssStyle.CirculeCon } >


                <div className={ CssStyle.Circle }>

                    <div className={ CssStyle.CirculeFront } style={{ transform : 'rotate( '+ s +'deg)'}} >

                    </div>

                    <div className={ CssStyle.CirculeBack  } >

                    </div>

                </div>


                <div className={ CssStyle.ActionCon } >

                    <button onClick={ BackBtnHandler } className={ CssStyle.BackBtn } >
                        Back
                    </button>

                    <button onClick={ NextBtnHandler } className={ CssStyle.NextBtn } >
                        Next
                    </button>

                </div>

            </div>

    </div>
}

export default Circule;