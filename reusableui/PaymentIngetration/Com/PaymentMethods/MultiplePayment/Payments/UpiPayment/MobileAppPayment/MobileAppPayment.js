"use client"
import React, { useState } from 'react';
import CssStyle from './MobileAppPayment.module.css';

import MobileApp from '../../../Com/UPIPaymentInput/MobileApp/MobileApp';

import axios from 'axios';


const MobileAppPayment = props => {


    const orderDetails = props.orderDetails;

    const [ showSpinner, setShowSpinner ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState( '' );


    const payNowHandler = () => {

        setErrorMessage( '' );
        setShowSpinner( true );

        const postData = {

            paymentMode: 'UPI_INTENT',
            txnToken: orderDetails.txnToken,
            orderId: orderDetails.txnOrderId

        }


        axios.post( 'https://qqbqpjgk0m.execute-api.ap-south-1.amazonaws.com/payment/process-txn', postData )

            .then( response => {

                const resData = response.data;

                if( resData.responseCode === '001' ) {

                    const deepLinkUrl = resData.deepLinkUrl;
                    window.location.replace( deepLinkUrl );
                    setShowSpinner( false );

                } else if ( resData.responseCode === '000' ) {

                    setErrorMessage( resData.errorMessage );
                    setShowSpinner( false );

                }

                
            }).catch( e => {

                setErrorMessage( 'Networ error' );
                setShowSpinner( false );

            });

    }

    
    return (

        <div className={ CssStyle.Con } >

            <MobileApp 
                orderDetails={ orderDetails } 
                payNowHandler={ payNowHandler }
                showSpinner={ showSpinner }
                errorMessage={ errorMessage }
            />

        </div>

    );

}

export default MobileAppPayment;


