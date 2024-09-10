"use client"

import React, { useState } from 'react';
import CssStyle from './PaymentMethods.module.css';


import { PAYMENT_MODE } from './Com/ConstValues/ConstValues';
import PaymentName from './Com/PaymentName/PaymentName';

import UpiPayment from './MultiplePayment/Payments/UpiPayment/UpiPayment';
import DebitCardPayment from './MultiplePayment/Payments/DebitCardPayment/DebitCardPayment';
import CreditCardPayment from './MultiplePayment/Payments/CreditCardPayment/CreditCardPayment';
import NetBankingPayment from './MultiplePayment/Payments/NetBankingPayment/NetBankingPayment';


// All set
export default function PaymentMethods({orderDetails}){


    const [ selectedPaymentMethod, setSelectedPaymentMethod ] = useState( null );

    const selectedPaymentMethodHandler = sePayment => {

        setSelectedPaymentMethod( sePayment );
    }


    return <React.Fragment>

        <div className={ CssStyle.Con }>


            {/* start upi and upi_intent payment */}
            <PaymentName 
                paymentName="UPI"
                isSelected={ selectedPaymentMethod === PAYMENT_MODE.upi ? true : false }
                paymentMethodHandler={ () => selectedPaymentMethodHandler( PAYMENT_MODE.upi ) }
            />
            { selectedPaymentMethod === PAYMENT_MODE.upi ? <UpiPayment orderDetails={ orderDetails } /> : null }
            {/* end upi and upi_intent payment */}
            

            {/* start debit card payment */}
            <PaymentName 
                paymentName="Debit Card" 
                isSelected={ selectedPaymentMethod === PAYMENT_MODE.debitCard ? true : false }
                paymentMethodHandler={ () => selectedPaymentMethodHandler( PAYMENT_MODE.debitCard ) }
            />
            { selectedPaymentMethod === PAYMENT_MODE.debitCard ? <DebitCardPayment orderDetails={ orderDetails } /> : null }
            {/* end debit card payment */}


            {/* start credit card payment */}
            <PaymentName 
                paymentName="Credit Card" 
                isSelected={ selectedPaymentMethod === PAYMENT_MODE.creditCard ? true : false }
                paymentMethodHandler={ () => selectedPaymentMethodHandler( PAYMENT_MODE.creditCard ) }
            />
            { selectedPaymentMethod === PAYMENT_MODE.creditCard ? <CreditCardPayment orderDetails={ orderDetails } /> : null }
            {/* end credit card payment */}


            {/* start net banking payment */}
            <PaymentName 
                paymentName="Net Banking"
                isSelected={ selectedPaymentMethod === PAYMENT_MODE.netBanking ? true : false }
                paymentMethodHandler={ () => selectedPaymentMethodHandler( PAYMENT_MODE.netBanking ) }
            />
            { selectedPaymentMethod === PAYMENT_MODE.netBanking ? <NetBankingPayment orderDetails={ orderDetails } /> : null }
            {/* end net banking payment */}


            {/* start cash payment */}
            {/* <PaymentName 
                paymentName="Cash ( visit any branch )"
                isCashPayment={ true }
            /> */}
            {/* end cash payment */}
        </div>

    </React.Fragment>
}



