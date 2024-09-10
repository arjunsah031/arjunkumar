
import React from 'react';
import CssStyle from './Ebqsquare3.module.css';

const Ebqsquare3 = () => {

    const Circulewidth = 100;
    const CirculeBorder = '12'

    const CirculeStyle = {

        width : Circulewidth + 'px',
        height : Circulewidth + 'px',
        border: `${CirculeBorder}px solid green`
        
    }

    const RootContainerStyle = {
        
        width : Circulewidth/1.5 + 'px',
        height : ( Circulewidth * 30)/100 + 'px'
    }

    const RootStyle = {

        width : Circulewidth/1.5 + 'px',
        height : ( Circulewidth * 30)/100 + 'px'

    }

    return <div className={ CssStyle.Con } >

        <div className={ CssStyle.Circule } style={ CirculeStyle}>

            <div className={ CssStyle.RootContainer} style={ RootContainerStyle}>

                <div className={ CssStyle.Movableroot}>

                    <div className={ CssStyle.Root } style={ RootStyle} > </div>

                </div>

            </div>

        </div>

       

    </div>
}

export default Ebqsquare3;