"use client"
import React, { useEffect, useState } from "react";
import CssStyle from './Practice.module.css';

import axios from 'axios'
import Emply from "./Emply/Emply";



const Practice = () => {

    const [ employdata, setEmplydata ] = useState([]);

    const [data, setData ] = useState([]);

    const searchHandler = (e) => {

        const fillterdata = (employdata.filter( item => item.firstName.toLowerCase().includes(e.target.value.toLowerCase())) ||  employdata.filter( item => item.contactNumber.includes(e.target.value)))
        
        setData(fillterdata);

    }
    
    useEffect( () => {

        axios.get( 'https://hub.dummyapis.com/employee?noofRecords=30&idStarts=1001') 

            .then( response => {

                setEmplydata(response.data)
            } )

            .catch(errr => {

                console.log(errr)
            }) 

    }, [ ] )

   
    let containData = employdata.map( iteam => {

        return <Emply

            key = { iteam.id}
            name = { iteam.firstName}
            email = { iteam.age}
            contaictNumber ={ iteam.contactNumber}
        />

    }); 

     if( data.length > 0 ) {

        containData = data.map( iteam => {

            return <Emply
                key = { iteam.id}
                name = { iteam.firstName}
                email = { iteam.age}
                contaictNumber ={ iteam.contactNumber}
            
            
            />
        })

    }

    return <section className={ CssStyle.Con } >

        <div className={ CssStyle.SearchCon }>
            <input 
                type='text'  
                placeholder="search" 
                onChange={searchHandler} />
        </div>

        <div className={ CssStyle.itemTittle}>
                <div> NAME</div>
                <div>AGE</div>
                <div>NUMBER</div>
        </div>

       <div className={ CssStyle.emplylistCon}>

            

            { containData}

        
       </div>

    </section>
}

export default Practice;