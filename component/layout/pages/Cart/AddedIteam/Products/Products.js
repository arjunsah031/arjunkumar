"use client"

import CssStyle from './Products.module.css';
import { useDispatch } from 'react-redux';
import { deleteCartAction } from '@/Store/Actions/AddtoCart/AddtoCart';



export default function Products ({ tittle, duration, id}) {
    
    const dispatch = useDispatch();

    const deletecartHandler = id => {

        dispatch( deleteCartAction(id));

    }

    return <div className={ CssStyle.Con } >

        <div className={ CssStyle.Summry}> ORDER SUMMARY </div>

        <div className={ CssStyle.PlanCon}>

            <div> Plan </div>
            <div> { tittle }  </div>
        </div>


        <div className={ CssStyle.DurationCon } >  

            <div> Duration</div>
            <div> { duration } month</div>
        </div>

        <div className={ CssStyle.DeleteCon }>

            <button onClick={ () => deletecartHandler(id) } >delete</button>

        </div>

    </div>
}
