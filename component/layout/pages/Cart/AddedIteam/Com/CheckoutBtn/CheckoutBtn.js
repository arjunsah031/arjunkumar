"use client"

import CssStyle from './CheckoutBtn.module.css';

import { useDispatch, useSelector } from "react-redux";
import { Dummydata } from "@/reusableui/Product/ProductDummydata/ProductDummydata";
import { showPaymentOptionsAction } from "@/Store/Actions/TxnDetails/BuyNowProduct";


const CheckoutBtn = () => {

    const dispatch = useDispatch();

    const Productid = useSelector( s => s.AddtoCartReducer.addtocart);

    const selectedIteam = Dummydata.filter( ({id}) => Productid.includes(id) );

    const Price = (arry) => {

        let sum = 0;

        for(let i = 0;  i < arry.length; i++)  

            sum +=  arry[i]
            return sum;    
    }

    const pricseinarry  = selectedIteam.map( iteam => iteam.price)
    
    const totalPrice = Price(pricseinarry);

    const ChceckoutHandle = () => {

        dispatch(showPaymentOptionsAction('guguu', 'cbibi',totalPrice))

    }

    const Containdata = totalPrice ? <div>

        <div className={ CssStyle.TotalCon}> 
            <div>total</div>
            <div> { totalPrice } </div>
        </div>

        <div className={ CssStyle.CheckoutCon} >
            <button onClick={ChceckoutHandle} >CHECKOUT</button>
        </div>

    </div> : <div className={ CssStyle.Checkoutnot}> oh no?? </div>

    return <div className={ CssStyle.CheckoutConinr}>

        { Containdata}

    </div>
    
}

export default CheckoutBtn;