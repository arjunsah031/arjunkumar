import React from "react";
import CssStyle from './Transition.module.css';

const Transition = () => {

    return <div className={ CssStyle.Con } >

        <div className={ CssStyle.DivCon } >

            <div className={ CssStyle.translate}>
                heo
            </div>
            
        </div>

        <div className={ CssStyle.DivCon } >

            <div className={ CssStyle.BorderTransition  } >
                <span> Hober Link </span>
            </div>
            
        </div>

        <div className={ CssStyle.DivCon } >

            <div className={ CssStyle.textSwiping }>
                
            </div>
            
        </div>

        {/* <div className={ CssStyle.DivCon } >

            <div className={ CssStyle.Skew }  >
                heo
            </div>
            
        </div> */}

    </div>
}


export default Transition;