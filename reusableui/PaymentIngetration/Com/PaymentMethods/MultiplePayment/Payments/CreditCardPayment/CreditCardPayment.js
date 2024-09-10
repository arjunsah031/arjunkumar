import React from "react";

import PaymentChildrenBox from '../../Com/PaymentChildrenBox/PaymentChildrenBox';
import DebitCreditCard from '../../Com/DebitCreditCard/DebitCreditCard';

import { PAYMENT_MODE } from '../../../Com/ConstValues/ConstValues';


const CreditCardPayment = props => {

    const orderDetails = props.orderDetails;

    return <React.Fragment>

        <PaymentChildrenBox>

            <DebitCreditCard 
                orderDetails={ orderDetails }
                paymentModeType={ PAYMENT_MODE.creditCard }
            />

        </PaymentChildrenBox>

    </React.Fragment>;

}

export default CreditCardPayment;



