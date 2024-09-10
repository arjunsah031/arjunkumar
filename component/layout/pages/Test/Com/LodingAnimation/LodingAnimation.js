import React from "react";
import CssStyle from './LodingAnimation.module.css';

const LodingAnimation = () => {

    const width = '65'

   

    const ContainerStyle = {

        height:  width  + 'px'
      
    }
    
    const EmptyConStyle = {

        width: width -  (width * 2/100) + 'px',
        height:width -  (width * 2/100) + 'px'
    }



    return <section className={ CssStyle.Con } >
        
            <div className={ CssStyle.Container} style={ ContainerStyle}>

                <div className={ CssStyle.EmptyCon} style={ EmptyConStyle }> </div>
                <div className={ CssStyle.EmptyCon} style={ EmptyConStyle }> </div>
                <div className={ CssStyle.EmptyCon} style={ EmptyConStyle }> </div>
                <div className={ CssStyle.EmptyCon} style={ EmptyConStyle } > </div>

            </div>
    </section>
}

export default LodingAnimation;