
import React from "react";
import CssStyle from './Ebqanimation.module.css';

const Ebqanimation = () => {

    //FOR CIRCULE

    const width = '60'
    const bordewidth = '2'
    
    let translateX =  ( width/2 + width/4) - (bordewidth-1.5)

    const Circulestyle = {

        width : width + 'px',
        height : width + 'px',
        border: `${bordewidth}px solid white`
    }

    const CirculeBarStyle = {

        width : width/2,
        height :`${ bordewidth}px`,
        transform: `rotate(45deg) translateX( ${ translateX }px)`
    }

    //FOR TRANGLE

    const tranglewidt = '70';

    const tringleConStyle = {

        width: ( tranglewidt * 2) - ( tranglewidt * 20) /100 + 'px',
        height: ( tranglewidt * 2) - ( tranglewidt * 40) /100 + 'px',
        paddingBottom: ( tranglewidt * 20) /100 + 'px'
    
    }

    const trangestyle = {

        width : tranglewidt + 'px',
        height : tranglewidt + 'px'

    }

    return <div className={ CssStyle.Con }>

        <div className={CssStyle.CirculeCon }>
            <div  className={ CssStyle.Circule } style={ Circulestyle }> 

            <div className={ CssStyle.CirculeBar } style={ CirculeBarStyle} >  </div>

            </div>
        </div>

        <div className={ CssStyle.TrangleCon} style={ tringleConStyle }>  

            <div className={ CssStyle.Trangle} style={ trangestyle }>

                <div className={ CssStyle.Before}></div>
                <div className={ CssStyle.After }></div>

            </div>

        </div>

    </div>

}

export default Ebqanimation;