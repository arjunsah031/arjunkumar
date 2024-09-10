"use client"
import React, { useState } from "react";
import CssStyle from './Foodselction.module.css';

import { FoodDummydata } from "./FoodDymydata/FoodDymydata";
import FoodCard from "./FoodCard/FoodCard";
// import { type } from "@testing-library/user-event/dist/type";

const Foodselction = () => {

    const [data, setData ] = useState(FoodDummydata)

    //  const breakfastHandler = e => {
        
    //     const breakfastfillter = FoodDummydata.filter( itam => itam.type === 'breakfast' );

    //     setData(breakfastfillter)
    //  }

    //  const lunchHandler = e => {

    //     const breakfastfillter = FoodDummydata.filter( itam => itam.type === 'lunch' );

    //     setData(breakfastfillter)

    //  }

    //  const dinnerHandler = e => {

    //     const breakfastfillter = FoodDummydata.filter( itam => itam.type === 'dinner' );

    //     setData(breakfastfillter)

    //  }

    //  const allHandler = () => {
    //     setData(FoodDummydata)
    //  }

    const breakfastHandler = type => {
        
        const fillterdata = FoodDummydata.filter(iteam => iteam.type === type)
        setData(fillterdata)
    }

    const lunchHandler = type => {
        
        const fillterdata = FoodDummydata.filter(iteam => iteam.type === type)
        setData(fillterdata)
    }

    const dinnerHandler = type => {

        const fillterdata = FoodDummydata.filter(iteam => iteam.type === type)
        setData(fillterdata)
    }


    let containdata = data.map( itam => {

        return <FoodCard
            key = { itam.id}
            Name = {itam.Name}
            image = {itam.image}
            Type = { itam.type}
        
        />
    }) ;
     
    return <section className={ CssStyle.Con }>

        <div className={ CssStyle.BtnCon }>
            
            {/* <button onClick={ allHandler }>ALL</button>
            <button onClick={breakfastHandler} >BREAKFAST</button>
            <button onClick={lunchHandler}>LUNCH</button>
            <button onClick={dinnerHandler}>DINNET</button> */}

            <button onClick={ () => setData(FoodDummydata) }>ALL</button>
            <button onClick={ () => breakfastHandler('breakfast')} >BREAKFAST</button>
            <button onClick={ () => lunchHandler('lunch')}>LUNCH</button>
            <button onClick={ () => dinnerHandler('dinner')}>DINNET</button> 

        </div>

        <div className={ CssStyle.FoodIteamCon }>

            {containdata}
  
        </div>

       

    </section>
}

export default Foodselction;