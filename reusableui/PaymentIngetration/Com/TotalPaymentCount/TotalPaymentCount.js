
import CssStyle from './TotalPaymentCount.module.css';

import CartImage from '../Icons/cart.png';
import WhiteRupeesIcon from '../Icons/whiteRupeesIcon.png';
import Image from 'next/image';


export default function TotalPaymentCount( {txnAmount}) {

    
    return (

        <div className={ CssStyle.Con }>

            <div className={ CssStyle.CartCon }>
                <Image src={ CartImage } className={CssStyle.img} alt='this is' priority/>
                <span>Your total amount</span>
            </div>

            <div className={ CssStyle.RupeesCon }>
                <Image src={ WhiteRupeesIcon } className={CssStyle.img} alt='paument' priority />
                <span>{ txnAmount }</span>
            </div>
            
        </div>
    );

}





