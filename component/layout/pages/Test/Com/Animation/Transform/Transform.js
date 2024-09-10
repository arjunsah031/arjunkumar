import React from "react";
import CssStyle from './Transform.module.css';

const Transform = () => {

    return <div className={ CssStyle.Con } >

        <div className={ CssStyle.DivCon } >

            <div className={ CssStyle.translate}>
                heo
            </div>
            
        </div>

        <div className={ CssStyle.DivCon } >

            <div className={ CssStyle.Rotate } >
                heo
            </div>
            
        </div>

        <div className={ CssStyle.DivCon } >

            <div className={ CssStyle.scale }>
                heo
            </div>
            
        </div>

        <div className={ CssStyle.DivCon } >

            <div className={ CssStyle.Skew }  >
                heo
            </div>
            
        </div>

    </div>
}

export default Transform;