import React from 'react';

import CssStyle from './HeadingPayment.module.css';

import MasterCardIcon from '../Icons/masterCardIcon.png';
import VisaCardIcon from '../Icons/visaCardIcon.png';
import UPIIcon from '../Icons/upiIcon.png';
import Image from 'next/image';

export default function HeadingPayment() {

    return (

        <div className={ CssStyle.Con }>

            <div className={ CssStyle.HeadingTitle }>Payment</div>
            
            <div className={ CssStyle.InformationImagesCon }>

                <div className={ CssStyle.InformationText }>All transaction are secured and encrypted.</div>

                <div className={ CssStyle.PaymentLogoCon }>
                    <Image src={ VisaCardIcon } alt='helo' width={50} height={50} priority />
                    <Image src={ MasterCardIcon } alt='hehhht' width={50} height={50} priority />
                    <Image src={ UPIIcon } alt='heohh' width={50} height={50} priority />
                    <span>etc.</span>
                </div>
                
            </div>

        </div>
    );
}




