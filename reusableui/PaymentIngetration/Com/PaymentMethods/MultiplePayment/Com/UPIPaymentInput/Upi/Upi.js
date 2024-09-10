import React from 'react';
import CssStyle from './Upi.module.css';

import UpiIcon from '../Icon/enterUpiPayIcon.png';
import PayNowBtn from '../../../../Com/PayNowBtn/PayNowBtn';


const UpiCom = props => {

    const orderDetails = props.orderDetails;


    return (

        <div className={ CssStyle.Con }>

            <div className={ CssStyle.TitleCon }>
                <img src={ UpiIcon }  />
                <span>Pay by entering UPI ID</span>
            </div>

            <div className={ CssStyle.InputCon }>
                <input 
                    onChange={ props.onChangeEnteredUpiHandler }
                    value={ props.enteredUpi }
                    type="text" 
                    placeholder="Your upi handler@bankname" 
                />
            </div>

            <div className={ CssStyle.ErrorMessage }>{ props.errorMessage }</div>

            <PayNowBtn 
                txnAmount={ orderDetails.txnAmount }
                onClick={ props.payNowHandler }
                showLoader={ props.showSpinner }
            />

        </div>

    );

}

export default UpiCom;




