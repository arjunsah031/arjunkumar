"use client"

import CssStyle from './PaymentIngetration.module.css';


import TotalPaymentCount from './Com/TotalPaymentCount/TotalPaymentCount';
import HeadingPayment from './Com/HeadingPayment/HeadingPayment';

import PaymentMethods from './Com/PaymentMethods/PaymentMethods';

import GoBackBtn from './Com/GoBackBtn/GoBackBtn';


export default function PaymentIngetration({ txnToken, orderId, txnAmount,showGoBackBtn, goBackOnClick, }) {


    const orderDetails = {

        txnToken: txnToken,
        txnOrderId: orderId,
        txnAmount: txnAmount
    };

    return (

        <div className={ CssStyle.Con }>

            <TotalPaymentCount txnAmount={ orderDetails.txnAmount }/>

            <HeadingPayment />
            
            <PaymentMethods 
                orderDetails={ orderDetails }
            />

             { showGoBackBtn && <GoBackBtn goBackOnClick={ goBackOnClick } /> } 

        </div>
    );    
}






