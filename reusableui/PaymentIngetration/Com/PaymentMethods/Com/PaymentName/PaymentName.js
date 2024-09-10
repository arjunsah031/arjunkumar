"use client"

import React from 'react';
import CssStyle from './PaymentName.module.css';


export default function PaymentName({ isCashPayment, isSelected, paymentMethodHandler, paymentName }){

    
    const ConStyle = [ CssStyle.Con ];
    const BtnStyle = [ CssStyle.Btn ]
    const MainCicleStyle = [ CssStyle.MainCircle ];
    const ChildCircleStyle = [ CssStyle.ChildCircle ];
    const PaymentNameTextStyle = [ CssStyle.PaymentNameText ];


    if(isCashPayment ) {

        ConStyle.push( CssStyle.DisableCon );
        BtnStyle.push( CssStyle.DisableBtn );
        MainCicleStyle.push( CssStyle.DisableMainCircle );
        ChildCircleStyle.push( CssStyle.DisableChildCircle );
        PaymentNameTextStyle.push( CssStyle.DisablePaymentNameText );
    }

    if( isSelected ) {

        MainCicleStyle.push( CssStyle.ActiveMainCircle );
    }


    return (

        <div className={ ConStyle.join( ' ' ) }  >

            <button  className={ BtnStyle.join( ' ' ) }  onClick={ paymentMethodHandler } >

                <div className={ CssStyle.ContentCon }>

                    <div className={ MainCicleStyle.join( ' ' ) }>
                        <div className={ ChildCircleStyle.join( ' ' ) }></div>
                    </div>

                    <div className={ PaymentNameTextStyle.join( ' ' ) }>{ paymentName }</div>

                </div>

            </button>

        </div>

    );

}




