import React, { useEffect, useState } from "react";
import CssStyle from './NetBankingPayment.module.css';

import PaymentChildrenBox from '../../Com/PaymentChildrenBox/PaymentChildrenBox';
import SelectBoxInput from '../../Com/NetBanking/SelectBoxInput/SelectBoxInput';

import PayNowBtn from '../../../Com/PayNowBtn/PayNowBtn';
import ReDirectBankPage from '../../../Com/ReDirectBankPage/ReDirectBankPage';

import axios from 'axios';


export default function NetBankingPayment(props) {

    const orderDetails = props.orderDetails;

    const [ selectedBankName, setSelectedBankName ] = useState( 'Select your bank' );

    const [ selectedBankFullDetails, setSelectedBankFullDetails ] = useState( {} );

    const [ bankReDirectFromDetails, setBankReDirectFromDetails ] = useState( null );
   
    const [ showSpinner, setShowSpinner ] = useState( false );
    const [ onPayError, setOnPayError ] = useState( null );

    
    const [ statusListBank, setStatusListBank ] = useState( 'FETCHING_BANK_LIST' ); //FETCHING_BANK_LIST ERROR, FETCHED_LIST
    const [ listBanks, setListBanks ] = useState( [] );
    const [ gotErrorForFetchingBank, setGotErrorForFetchingBank ] = useState( null );


    const fetchListOfBanks = () => {

        setStatusListBank( 'FETCHING_BANK_LIST' );
        setListBanks( [] );
        setGotErrorForFetchingBank( null );

        const entOrderId = orderDetails.txnOrderId;

        const entTxnToken = orderDetails.txnToken;

        const postData = `orderId=${ entOrderId }&txnToken=${ entTxnToken }`;

         
        axios.get( 'https://qqbqpjgk0m.execute-api.ap-south-1.amazonaws.com/payment/list-net-banking-banks?'+postData )

            .then( response => {

                const resData = response.data;

                if( resData.responseCode === '001' ) {

                    
                    setListBanks( resData.listNBDetails );
                    setStatusListBank( 'FETCHED_LIST' );


                } else if ( resData.responseCode === '000' ) {

                    setGotErrorForFetchingBank( resData.errorMessage );
                    setStatusListBank( 'ERROR' );

                }


            }).catch( e => {

                setGotErrorForFetchingBank( 'Network error' );
                setStatusListBank( 'ERROR' );

            });

    }


    useEffect( () => {

        fetchListOfBanks();     

    }, [] );


    const selectedBankNameHandler = bankChannleCode => {

        const baItems = listBanks.find( item => item.channelCode === bankChannleCode );

        setSelectedBankName( baItems.channelName );
        setSelectedBankFullDetails( baItems );
        setOnPayError( null );

    }

    const payNowHandler = () => {

        setOnPayError( null );

        if( !selectedBankFullDetails.hasOwnProperty( 'channelCode' ) ) {

            setOnPayError( 'Please select your bank' );
            return;
        } 


        if( selectedBankFullDetails.isDisabled.status === 'true' ) {

            setOnPayError( selectedBankFullDetails.isDisabled.displayMsg );
            return;
        }

        if( selectedBankFullDetails.hasLowSuccess.status === 'true' ) {

            setOnPayError( selectedBankFullDetails.hasLowSuccess.msg );
            return;

        }
         
        const postData = {

            paymentMode: 'NET_BANKING',
            txnToken: orderDetails.txnToken,
            orderId: orderDetails.txnOrderId,

            channelCode: selectedBankFullDetails.channelCode
           
        }


        setShowSpinner( true );

        axios.post( 'https://qqbqpjgk0m.execute-api.ap-south-1.amazonaws.com/payment/process-txn', postData )

            .then( response => {

                const resData = response.data;

                if( resData.responseCode === '001' ) {

                    setBankReDirectFromDetails( resData.bankDirectFromDetails );

                } else if ( resData.responseCode === '000' ) {

                    setOnPayError( resData.errorMessage );
                    setShowSpinner( false );
                }

                
            }).catch( e => {

                setOnPayError( 'Network error' );
                setShowSpinner( false );

            });

    }


    return <React.Fragment>

        <PaymentChildrenBox>

            { bankReDirectFromDetails && 
                <ReDirectBankPage bankReDirectFromDetails={ bankReDirectFromDetails } /> 
            }

            <SelectBoxInput 
                listBanks={ listBanks }
                statusListBank={ statusListBank }
                gotErrorForFetchingBank={ gotErrorForFetchingBank }

                selectedBankName={ selectedBankName }
                selectedBankNameHandler={ selectedBankNameHandler }
            />

            <div className={ CssStyle.ErrorCon }>{ onPayError }</div>

            <PayNowBtn
                onClick={ payNowHandler }
                txnAmount={ orderDetails.txnAmount }
                showLoader={ showSpinner }
            />

        </PaymentChildrenBox>
        
    </React.Fragment>;


}



