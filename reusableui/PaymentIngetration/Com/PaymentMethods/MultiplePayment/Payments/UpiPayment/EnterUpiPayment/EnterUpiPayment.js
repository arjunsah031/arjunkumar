import React, { useState } from 'react';
import CssStyle from './EnterUpiPayment.module.css';

import UpiCom from '../../../Com/UPIPaymentInput/Upi/Upi';

import { removeAllSpaces } from '../../../../Com/Validation/Validation';

import SpinnerForUPI from './SpinnerForUPI/SpinnerForUPI';

import axios from 'axios';


const EnterUpiPayment = props => {

    const orderDetails = props.orderDetails;

    const [ isSentPaymentLink, setIsSentPaymentLink ] = useState( false );

    const [ showSpinner, setShowSpinner ] = useState( false );

    const [ enteredUpi, setEnteredUpi ] = useState( '' );

    const [ errorMessage, setErrorMessage ] = useState( '' );


    const onChangeEnteredUpiHandler = event => {

        if( showSpinner ) {

            return;
        }

        const entUpiId = removeAllSpaces( event.target.value );

        setErrorMessage( '' );
        setEnteredUpi( entUpiId);

    }


    const payNowHandler = () => {

            
        if( enteredUpi.length < 1 ) {

            setErrorMessage( 'Enter your upi id' );
            return;
        }

        const entTxnToken = orderDetails.txnToken;
        const entOrderId = orderDetails.txnOrderId;

        setErrorMessage( '' );
        setShowSpinner( true );


        const getData = `txnToken=${ entTxnToken }&orderId=${ entOrderId }&upiId=${ enteredUpi }`;

            axios.get( 'https://qqbqpjgk0m.execute-api.ap-south-1.amazonaws.com/payment/validate-upi-id?' +getData )

                .then( upiResponse => {

                    const upiResponseData = upiResponse.data;

                    if( upiResponseData.responseCode === '001' ) {

                        const postData = {

                            paymentMode: 'UPI',
                            txnToken: entTxnToken,
                            orderId: entOrderId,
                            payerAccount: enteredUpi

                        }

                        axios.post( 'https://qqbqpjgk0m.execute-api.ap-south-1.amazonaws.com/payment/process-txn', postData )

                            .then( response => {

                                const resData = response.data;

                                if( resData.responseCode === '001' ) {

                                    setIsSentPaymentLink( true );
                                    setShowSpinner( false );
                                    
                                } else if ( resData.responseCode === '000' ) {

                                    setErrorMessage( resData.errorMessage );
                                    setShowSpinner( false );

                                }

                                
                            }).catch( e => {

                                setErrorMessage( 'Networ error' );
                                setShowSpinner( false );

                            });


                    } else if ( upiResponseData.responseCode === '000' ) {

                        
                        setErrorMessage( upiResponseData.message );
                        setShowSpinner( false );

                    }


                }).catch( e => {

                    setErrorMessage( 'Networ error' );
                    setShowSpinner( false );

                });


    }


    return (

        <React.Fragment>
       
            {
            isSentPaymentLink 
                &&
            <SpinnerForUPI 
                orderId={ orderDetails.txnOrderId } 
                upiId={ enteredUpi } 
            /> 

            }


            <div className={ CssStyle.Con }>

                <UpiCom 

                    orderDetails={ orderDetails } 
                
                    enteredUpi={ enteredUpi }
                    onChangeEnteredUpiHandler={ onChangeEnteredUpiHandler }
                    errorMessage={ errorMessage }

                    payNowHandler={ payNowHandler }
                    showSpinner={ showSpinner }

                />

            </div>


        </React.Fragment>

    );

}

export default EnterUpiPayment;



