import React, { useEffect, useState } from 'react';
import CssStyle from './SpinnerForUPI.module.css';

import TopFixedLayer from './TopFixedLayer/TopFixedLayer';

import axios from 'axios';


const SpinnerForUPI = ( props ) => {

    const [ refreshTheState, setRefreshTheState ] = useState( Math.random() );
        
    useEffect( () => {

        setTimeout(() => {
            
            axios.get( 'https://qqbqpjgk0m.execute-api.ap-south-1.amazonaws.com/payment/txn-status?orderId=' +props.orderId )
                
                .then( res => {

                    const txnStatus = res.data.txnStatus;

                    if( txnStatus === 'TXN_SUCCESS' ) {
                        
                        window.location.replace( res.data.callbackUrl );

                    } else if ( txnStatus === 'TXN_FAILURE' ) {

                        window.location.replace( res.data.callbackUrl );
                        
                    } 

                    setRefreshTheState( Math.random() );

                });

        }, 3000 );

        
        
    }, [ refreshTheState ] );


    return (

        <TopFixedLayer>

            <div className={ CssStyle.ContentConn }>

                <div className={ CssStyle.BoxCon  }>

                    <div className={ CssStyle.First }>
                        <span className={ CssStyle.First_First }>Complete payment: </span>
                        <span className={ CssStyle.First_Second }> Entered UPI Address: { props.upiId }</span>
                    </div>

                    <div className={ CssStyle.Second }>

                        <div className={ CssStyle.Secon__First}>

                            <div className={ CssStyle.Step }>STEPS:</div>

                            <div className={ CssStyle.StepCon }>
                                <span>1. Go to your UPI payment app.</span>
                                <span>2. Check for payment notification.</span>
                                <span>3. Pay by entering UPI PIN.</span>
                            </div>

                        </div>

                        <div className={ CssStyle.ConLoading }>
                            <div className={ CssStyle.Loader }></div>
                        </div>

                    </div>

                </div>


                <div className={ CssStyle.DoNotCutPageText }>
                    <span>Do Not Cut Or Minimize This Page.</span>
                </div>

            </div>

        </TopFixedLayer>

    );

}

export default SpinnerForUPI;


