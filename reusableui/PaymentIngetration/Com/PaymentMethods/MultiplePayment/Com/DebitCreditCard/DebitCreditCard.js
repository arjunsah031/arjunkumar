"use client"

import React, { useEffect, useState } from "react";
import CssStyle from './DebitCreditCard.module.css';

import CusMyInput from './Com/CusMyInput/CusMyInput';
import ExpiryCvcChildren from './Com/ExpiryCvcChildren/ExpiryCvcChildren';
import PayNowBtn from "../../../Com/PayNowBtn/PayNowBtn";
import ReDirectBankPage from '../../../Com/ReDirectBankPage/ReDirectBankPage';

import axios from 'axios';


import { 

    onlyDigitAllow, 

    removeAllSpaces, 

    sixDigitOnlyGet, 

    removeAllHiFan,

    removeAllSalesh

} from '../../../Com/Validation/Validation';



export default function DebitCreditCard (props) {


    const orderDetails = props.orderDetails;

    const paymentModeType = props.paymentModeType;

    const [ bankReDirectFromDetails, setBankReDirectFromDetails ] = useState( null );
    const [ showSpinner, setShowSpinner ] = useState( false );

    const [ cardBinNumber, setCardBinNumber ] = useState( '' );
    const [ cardChannelCode, setCardChannelCode ] = useState( null );
    const [ isValidBinNumber, setIsValidBinNumber ] = useState( false );


    const [ enterCardNumber, setEnterCardNumber ] = useState( '' );
    const [ enterCardNumberError, setEnterCardNumberError ] = useState( '' );

    const [ enterCVV, setEnterCVV ] = useState( '' );
    const [ enterCVVError, setEnterCVVError ] = useState( '' );

    const [ enterExpiryCard, setEnterExpiryCard ] = useState( '' );
    const [ enterExpiryCardError, setEnterExpiryCardError ] = useState( '' );


    // Start OnChange CardNumber
    const enterCardNumberHandler = event => {

        const entCardNumber = removeAllHiFan( event.target.value );

        if( entCardNumber === '' || onlyDigitAllow( entCardNumber ) === 'VALID_DIGIT' ) {


            if( entCardNumber.length < 20 ) {

                const intoArray = entCardNumber.split("");

                let stringValue = '';

                intoArray.map( ( item ) => {

                    if( stringValue.length === 4 || stringValue.length === 9 || stringValue.length === 14 || stringValue.length === 19 || stringValue.length === 24 ) {

                        stringValue = removeAllSpaces( stringValue +'-' +item  );

                    } else {

                        stringValue = removeAllSpaces( stringValue +'' +item  );

                    }

                });

                
                setCardBinNumber(sixDigitOnlyGet( stringValue ));
                setEnterCardNumber( stringValue );

            }
            
        }

    }
    // End OnChange CardNumber

    // Start OnChange Expiration
    const enterExpiryCardHandler = event => {

        const entExpiryDate = removeAllSalesh( event.target.value );

        if( entExpiryDate === '' || onlyDigitAllow( entExpiryDate ) === 'VALID_DIGIT' ) {

            if( entExpiryDate.length < 5 ) {


                const intoArray = entExpiryDate.split("");

                let stringValue = '';

                intoArray.map( ( item ) => {

                    if( stringValue.length === 2 ) {

                        stringValue = removeAllSpaces( stringValue +'/' +item  );

                    } else {

                        stringValue = removeAllSpaces( stringValue +'' +item  );

                    }

                });

                setEnterExpiryCardError( '' );
                setEnterExpiryCard( stringValue );

            }

        }

    }
    // End OnChange Expiration

    // Start OnChange CVV
    const enterCVVHandler = event => {

        const entCVV = event.target.value;

        if( entCVV === '' || onlyDigitAllow( entCVV ) === 'VALID_DIGIT' ) {

            if( entCVV.length < 4 ) {

                setEnterCVVError( '' );
                setEnterCVV( entCVV );

            }

        }

    }
    // End OnChange CVV


    // Start
    const fetchBinDetailsHandler = () => {

        const orderId = orderDetails.txnOrderId;
        const txnToken = orderDetails.txnToken;

        setEnterCardNumberError( '' );
        setCardChannelCode( null );
        setIsValidBinNumber( false );
        
        const postData = `bin=${ cardBinNumber }&orderId=${ orderId }&txnToken=${ txnToken }`;

        axios.get( 'https://qqbqpjgk0m.execute-api.ap-south-1.amazonaws.com/payment/card-btn-details?' +postData, )

            .then( responseData => {

                
                if( responseData.data.responseCode === '001' ) {

                    const cardDetails = responseData.data.cardDetails;

                    setCardChannelCode( cardDetails.cardChallelCode );
                    setIsValidBinNumber( true );
                    

                } else if ( responseData.data.responseCode === '000' ) {


                    setEnterCardNumberError( responseData.data.errorMessage );

                }

                
            }).catch( e => {

                setEnterCardNumberError( 'Network error' );

            });

    }
    // End


    useEffect( () => {

        
        if( cardBinNumber.length === 6 ) {

            fetchBinDetailsHandler();
             
        } else if ( cardBinNumber.length === 5 ) {


            setEnterCardNumberError( '' );
            setCardChannelCode( null );
            setIsValidBinNumber( false );
            
        }


    }, [ cardBinNumber ] );


    const payNowBtnHandler = () => {

        if( showSpinner ) {

            return;
        }

        const serverCVV = enterCVV;
        const serverExpiryDate = removeAllSalesh( enterExpiryCard );
        const serverCardNumber = removeAllHiFan( enterCardNumber );

        let isValidInutsCount = 0;

        if( serverCVV.length !== 3 ) {

            setEnterCVVError( 'Invalid CVV' );
    
        } else {

            isValidInutsCount = isValidInutsCount + 1;
            setEnterCVVError( '' );

        }
        

        if( serverExpiryDate.length !== 4 ) {

            setEnterExpiryCardError( 'Invalid expiration date');
            
        } else {

            isValidInutsCount = isValidInutsCount + 1;
            setEnterExpiryCardError( '' );
        }



        if( serverCardNumber.length < 6 ) {

            setEnterCardNumberError( 'Invalid card number');

        } else if ( isValidBinNumber === false ) {

            return;

        } else if ( serverCardNumber.length < 16 ) {

            setEnterCardNumberError( 'Invalid card number');

        } else {

            setEnterCardNumberError( '' );
            isValidInutsCount = isValidInutsCount + 1;

        }

        
        if( isValidInutsCount === 3 ) {

            const exporyArray = serverExpiryDate.split('');
            const finalEx = exporyArray[ 0 ] +'' +exporyArray[ 1 ] +'20' +exporyArray[ 2 ] +'' +exporyArray[ 3 ];

            
            const postData = {

                paymentMode: paymentModeType,
                txnToken: orderDetails.txnToken,
                orderId: orderDetails.txnOrderId,
    
                cardNumber: serverCardNumber,
                cvc: serverCVV,
                expiryDate: finalEx
               
            }

            setShowSpinner( true );

            axios.post( 'https://qqbqpjgk0m.execute-api.ap-south-1.amazonaws.com/payment/process-txn', postData )

                .then( response => {

                    const resData = response.data;

                    if( resData.responseCode === '001' ) {

                        setBankReDirectFromDetails( resData.bankDirectFromDetails );

                    } else if ( resData.responseCode === '000' ) {

                        setEnterCardNumberError( resData.errorMessage );
                        setShowSpinner( false );
                    }

                    
                }).catch( e => {

                    setEnterCardNumberError( 'Network error' );
                    setShowSpinner( false );

                });

        }
        
    }
    

    return (

        <div className={ CssStyle.Con }>

            { bankReDirectFromDetails && 
                <ReDirectBankPage bankReDirectFromDetails={ bankReDirectFromDetails } /> 
            }


            {/* Start CARD NUMBER */}
            <CusMyInput 
                title="Card number"
                onChange={ enterCardNumberHandler }
                value={ enterCardNumber }
                error={ enterCardNumberError }

                inputType='CARD_NUMBER'
                iconType={ cardChannelCode }
            />
            {/* End CARD NUMBER */}


            {/* Start CVV EXPIRATION DATE */}
            <ExpiryCvcChildren 
            
                expiryCom={

                    <CusMyInput 
                        title="Expiration date"
                        onChange={ enterExpiryCardHandler }
                        value={ enterExpiryCard }
                        error={ enterExpiryCardError }

                        placeholder="MM/YY"
                    />
                }

                cvcCom={
                    <CusMyInput 
                        title="CVV"
                        onChange={ enterCVVHandler }
                        value={ enterCVV }
                        error={ enterCVVError }
                    />
                }

            />
            {/* End CVV EXPIRATION DATE */}

            <PayNowBtn 

                txnAmount={ orderDetails.txnAmount }
                showLoader={ showSpinner }
                onClick={ payNowBtnHandler }
            />

        </div>

    );

}




