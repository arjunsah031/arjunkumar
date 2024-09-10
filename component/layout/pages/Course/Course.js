"use client";

import React, { useEffect, useState } from "react";
import CssStyle from './Course.module.css';

import CarddBox from "@/reusableui/Product/CarddBox/CarddBox";
import Card from "@/reusableui/Product/Card/Card";
import { Dummydata } from '@/reusableui/Product/ProductDummydata/ProductDummydata';

const Course = () => {

    const [ cardIteam, setCardIteam ] = useState([]);
    const [ status, setStatus ] = useState('') //fatching
    
    useEffect( () => {

        setCardIteam(Dummydata)
        setStatus('fatching')

    },[]);

    let containdata;

    if( status.length >= 1) {

        containdata = cardIteam.map( iteam => {

            return <Card

                key = { iteam.id}
                id = { iteam.id}
                tittle = { iteam.tittle}
                price = { iteam.price }
                des = { iteam.des }
                duration = { iteam.duration}

            />
        })
    } 

    return <section className={ CssStyle.Con } >

          <CarddBox> 

            {containdata}
            
          </CarddBox>
       
    
    </section>
}

export  default Course;