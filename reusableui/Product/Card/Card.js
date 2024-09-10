"use client";

import React,{ useReducer, useState} from "react";
import CssStyle from './Card.module.css';

import DolarIcon from '@/assets/pageimg/dolarIcon.png';
import CusBtn from "../CusBtn/CusBtn";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export default function Card ({id, tittle, price, des, duration,}) {

    const Router = useReducer()

    const AddtoCartid = useSelector( s =>s.AddtoCartReducer.addtocart);

    const selectedid = AddtoCartid.filter( s => s === id).length === 1 ? true : false;

    const [ addedid, setAddedid ] = useState( selectedid ? id : '---')
    

    
    const onMouseOverHandlrer = hoverid => {
        setAddedid(hoverid)
    }

    const onMouseLeaveHandler = leaveid => {
            Router.push('/cart')
    }

    let backcolor ;
    let col;
    if( addedid === id ) {
        backcolor = 'rgba(0, 0, 0, 0.601)'
        col = 'white'
    }

    return <div className={ CssStyle.Con } >

        <div  className={ CssStyle.Card}  style={{ backgroundColor : backcolor, color:col }}  >

            <div className={ CssStyle.Tittle}> { tittle } </div>

            <div className={  CssStyle.RupesCon }>

                <Image className={  CssStyle.Img } src={ DolarIcon } alt="dolaricon" property=""/>
                <div className={ CssStyle.Price}> { price } </div>

            </div>

            <div className={ CssStyle.Des}> { des } </div>

            <div className={ CssStyle.ValidDate }> valid for { duration }    month </div>

            <CusBtn 

                id = { id }
                addedid={ addedid }
                onMouseOver={ onMouseOverHandlrer }
                onMouseLeave={ onMouseLeaveHandler  }
                selectedid={ selectedid }
            />
            
        </div>

     </div>
    
}
