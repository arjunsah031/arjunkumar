"use client"

import React from 'react';
import CssStyle from './PayNowBtn.module.css';

import PaySpinner from '../PaySpinner/PaySpinner';


export default function PayNowBtn({ onClick, txnAmount, showLoader,   }) {


    let contentData = <button 
                        className={ CssStyle.Btn} 
                        onClick={ onClick } >{ "Pay Rs. " +txnAmount } </button>


    if( showLoader ) {

        contentData = <div className={ CssStyle.SpinnerStyle }>
            <PaySpinner borderColor="#000" width="20px" />
        </div>
    }


    return (
        <div className={ CssStyle.Con }>
            { contentData }
        </div>
    );

}



