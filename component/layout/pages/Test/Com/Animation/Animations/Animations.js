import React from "react";
import CssStyle from './Animations.module.css';

const Animations = () => {

    return <div className={ CssStyle.Con } > 

        <div className={ CssStyle.DivCon } >
                CIRCLE Animation
            <div className={ CssStyle.Circle}>
                
            </div>
            
        </div>

        <div className={ CssStyle.DivCon } >
                OTHER CIRCULE ANIMATION 
            <div className={ CssStyle.Loder } >

                
                <span style = { { '--i':1}}></span>
                <span style = { { '--i':2}}></span>
                <span style = { { '--i':3}}></span>
                <span style = { { '--i':4}} ></span>    
                <span style = { { '--i':5}}></span>
                <span style = { { '--i':6}}></span>
                <span style = { { '--i':7}}></span>
                <span style = { { '--i':8}} ></span>                
                <span style = { { '--i':9}}></span>
                <span style = { { '--i':10}}></span>
                <span style = { { '--i':11}}></span>
                <span style = { { '--i':12}} ></span>
                <span style = { { '--i':13}}></span>
                <span style = { { '--i':14}}></span>
                <span style = { { '--i':15}}></span>
                <span style = { { '--i':16}} ></span>
                <span style = { { '--i':17}}></span>
                <span style = { { '--i':18}}></span>
                <span style = { { '--i':19}}></span>
                <span style = { { '--i':20}} ></span>
                
                
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

export default Animations;