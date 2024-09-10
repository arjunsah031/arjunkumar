"use client"

import PaymentChildrenBox from '../../Com/PaymentChildrenBox/PaymentChildrenBox';

import EnterUpiPayment from './EnterUpiPayment/EnterUpiPayment';
import MobileAppPayment from './MobileAppPayment/MobileAppPayment';


export default function UpiPayment({orderDetails}) {

    return <PaymentChildrenBox>

            <MobileAppPayment orderDetails={ orderDetails } />

            <EnterUpiPayment orderDetails={ orderDetails } />

        </PaymentChildrenBox>
}



