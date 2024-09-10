"use client"

import React from 'react';
import CssStyle from './CusMyInput.module.css';

import DINNER_ICON from './CardIcons/dinnerIcon.png';
import MAESTRO_ICON from './CardIcons/maestroIcon.png';
import MASTER_ICON from './CardIcons/masterIcon.png';
import RUPAY_ICON from './CardIcons/rupayIcon.png';
import VISA_ICON from './CardIcons/visaIcon.png';


export default function CusMyInput(props) {

    const iconType = props.iconType;

    let gotCardIconImage = null;

    if( iconType === 'DINERS' ) {

        gotCardIconImage = DINNER_ICON;

    } else if ( iconType === 'MAESTRO' ) {

        gotCardIconImage = MAESTRO_ICON;

    } else if ( iconType === 'MASTER' ) {

        gotCardIconImage = MASTER_ICON;
        
    } else if ( iconType === 'RUPAY' ) {

        gotCardIconImage = RUPAY_ICON;
        
    } else if ( iconType === 'VISA' ) {

        gotCardIconImage = VISA_ICON;

    }


    return (
        
        <div className={ CssStyle.Con }>


            <div className={ CssStyle.InputTitleName }>{ props.title }</div>


            <div className={ CssStyle.InputIconCon }>

                <div className={ CssStyle.InputCon }>
                    <input 
                        className={ CssStyle.Input } 
                        type="text"

                        onChange={ props.onChange }
                        value={ props.value }
                        placeholder={ props.placeholder } 
                    />
                </div>

                { props.inputType === 'CARD_NUMBER' ? <div className={ CssStyle.IconCon }>
                    { gotCardIconImage && <img className={ CssStyle.IconImg } src={ gotCardIconImage }  /> }
                </div> : null }


            </div>


            <div className={ CssStyle.Error }>{ props.error }</div>


        </div>
        
    );

}






