'use client'

import CssStyle from './CusBtn.module.css';

import { useDispatch} from "react-redux";

import { addtoCartAction } from "@/Store/Actions/AddtoCart/AddtoCart";
import { useRouter } from 'next/navigation'


export default function CusBtn({id, onMouseOver, addedid,selectedid}){

    const Router = useRouter();
   
    const dispatch = useDispatch();

    const selectHandler = id => { 

        dispatch( addtoCartAction(id))
    }

    const gotocardhandler = () => {
        
        Router.push('/cart')
    }

    let backcolor ;
    if( addedid === id ) {

        backcolor = 'rgba(0, 128, 0, 0.872)'
    }

    let containdata = <button 

            style={{ backgroundColor : backcolor }}
            className={ CssStyle.AddtoCartBtn }  
            onClick={ () => selectHandler(id) }
            onMouseOver={ () => onMouseOver(id)}
            onMouseLeave={  () => onMouseOver('hbdicsbh ') }
            > SELECT </button>

    if(selectedid) {

        containdata = <button 

            style={{ backgroundColor : backcolor }}
            className={ CssStyle.GotocardBtn}
            
           
            onClick={ () => gotocardhandler(id) }
            onMouseOver={ () => onMouseOver(id)}
            
            > go to card </button>
  

    }
    return <div className={ CssStyle.Con }>

        { containdata}
 
    </div>
}
