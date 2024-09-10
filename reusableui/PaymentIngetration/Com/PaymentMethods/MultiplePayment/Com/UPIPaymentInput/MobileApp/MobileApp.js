import React from 'react';
import CssStyle from './MobileApp.module.css';

import MobileIcon from '../Icon/mobilePayIcon.png';
import PayNowBtn from '../../../../Com/PayNowBtn/PayNowBtn';
import Image from 'next/image';


export default function MobileApp({orderDetails, payNowHandler, showSpinner, errorMessage }) {

    return (
        
        <div className={ CssStyle.Con }>

            <div className={ CssStyle.MobileAppCon }>

                <div className={ CssStyle.MobileAppCon_ImageCon }>
                    <Image src={ MobileIcon } alt='fhfh' priority />
                </div>

                <div className={ CssStyle.MobileAppCon_Des }>
                    <span className={ CssStyle.MobileAppCon_Des__FirstText }>Pay Using UPI APP</span>
                    <span className={ CssStyle.MobileAppCon_Des__SeconText }>Choose from UPI on your phone</span>
                </div>

            </div>

            <div className={ CssStyle.ErrorMessage }>{ errorMessage }</div>

            <PayNowBtn 
                txnAmount={ orderDetails.txnAmount }
                onClick={ payNowHandler }
                showLoader={ showSpinner }
            />

            <div className={ CssStyle.OrCon }>
                <span>Or</span>
            </div>

        </div>

    );

}




