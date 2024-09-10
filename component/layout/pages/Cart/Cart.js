
import  CssStyle from './Cart.module.css';

import AddedIteam from "./AddedIteam/AddedIteam";
import CartIteam from "./CartIteam/CartIteam";



 export default function Cart() { 
    
    return <section className={ CssStyle.Con}>
        
        <div className={ CssStyle.PaymentTittle}> PAYMENT </div>

        <AddedIteam/>

        <CartIteam/>
         
    </section>

}
