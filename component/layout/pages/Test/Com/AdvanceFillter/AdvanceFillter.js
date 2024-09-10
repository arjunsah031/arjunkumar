"use client"
import React, { useEffect, useState } from 'react';
import CssStyle from './AdvanceFillter.module.css';

import ListIteam from './ListIteam/ListIteam';
import Serch from './Serch/Serch';
import SideNav from './SideNav/SideNav';

import { Dummydata } from './Dummydata/Dummydata';

const AdvanceFillter = () => { 
    
    const [ fillterdata, setFillterdata ] = useState(Dummydata);
    const [ catagorydata, setCatogorydata ] = useState([]);
    const [ starData, setStarData ] = useState(Dummydata)
    const [ renderdata, setReanderdata ] = useState('search') // serch place, dish, fstar cuisine price
    
    const [ optiondata, setoptiondata] = useState([]);
     
    const [ priceData, setPriceData ] = useState(Dummydata);
    
    const [  priceValue, setPriceValue ] = useState( [ 200, 500])

    const [ cuisine, setCuisine ] = useState([

        { 
            id : 1, 
            label : 'india',
            name : 'india',
            checked : false
        },
        { 
            id : 2, 
            label : 'neapl',
            name : 'nepal',
            checked : false
        },] );

    const searchHandler = e => {

        const data = Dummydata.filter( iteam => iteam.tittle.toLowerCase().includes(e.target.value.toLowerCase()));

        setReanderdata('search');
        setFillterdata(data);
    }

    const placeHandler = e => {

        const catagorydata = Dummydata.filter( iteam => iteam.catagory === 'place');

        setReanderdata('place');
        setCatogorydata(catagorydata);

    }
    const dishHandler = catogory => {

        const catagorydata = Dummydata.filter( iteam => iteam.catagory === 'dish');

        setReanderdata('dish');
        setCatogorydata(catagorydata);
    }


    const fistStarHandler = star => {
       
        const data = Dummydata.filter( iteam => iteam.star === star);
        setReanderdata('fstar')
        setStarData(data)
    }
    const secondStarHandler = star => {

        const data = Dummydata.filter( iteam => iteam.star === star);
        setReanderdata('secondstar')
        setStarData(data)

    }
    const thirdStarHaandler = star => {

        const data = Dummydata.filter( iteam => iteam.star === star);
        setReanderdata('thirdstar')
        setStarData(data)

    }
    const fourthStarHandler = star => {

        const data = Dummydata.filter( iteam => iteam.star === star);
        setReanderdata('fourstar')
        setStarData(data)

    }
    const fifthStarHandler = star => {

        const data = Dummydata.filter( iteam => iteam.star === star);
        setReanderdata('fivestar')
        setStarData(data)

    }

    const CuisineonChangeHandler = id => {

        const check = cuisine.map( user => user.id === id ? { ...user, checked : !user.checked} : user);
        setCuisine(check);
        
    }
 

    useEffect( () => {

        const checkeddata = cuisine.filter( user => user.checked).map( user => user.name.toLowerCase());
    

        if( checkeddata.length) {
        
            const update = Dummydata.filter( user => checkeddata.includes(user.cuisine));

            setReanderdata('cuisine')
           
            setoptiondata(update)
            
        }

    }, [cuisine]);

    const priceingHandler  = (event , value) => {

        const minvalue = value[0];
        const maxvalue = value[1];

        
        setPriceValue(value)
        const selectedPrice = Dummydata.filter( data => data.price >= minvalue && data.price <= maxvalue )
        setPriceData(selectedPrice)
        setReanderdata('price')


    }

    let containData = Dummydata.map( iteam => {

        return <ListIteam
            key = {iteam.tittle}
            tittle={ iteam.tittle }
            star={ iteam.star}

        />

    })
    if( fillterdata.length > 0 && renderdata ==='search') {

        containData = fillterdata.map( iteam => {

            return <ListIteam
                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
 
            />

        })
    }


    else if( renderdata === 'place') { 

        containData = catagorydata.map( iteam => {

            return <ListIteam

                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
 
            />

        })

    }
    else if( renderdata === 'dish') { 

        containData = catagorydata.map( iteam => {

            return <ListIteam
                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
 
            />

        })
    }

    else if( renderdata === 'cuisine' ) {

        containData = optiondata.map( iteam => {

            return <ListIteam

                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
 
            />

        })


    }


    else if( renderdata === 'fstar') { 

        containData = starData.map( iteam => {

            return <ListIteam

                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
            />
        })
    }
    else if( renderdata === 'secondstar') { 

        containData = starData.map( iteam => {

            return <ListIteam

                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
            />
        })
    }
    else if( renderdata === 'thirdstar') { 

        containData = starData.map( iteam => {

            return <ListIteam

                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
            />
        })
    }
    else if( renderdata === 'fourstar') { 

        containData = starData.map( iteam => {

            return <ListIteam

                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
            />
        })
    }
    else if( renderdata === 'fivestar') { 

        containData = starData.map( iteam => {

            return <ListIteam
                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star}
            />
        })
    }
    
    else if( renderdata === 'price') {

        containData = priceData.map( iteam => {

            return <ListIteam
            
                key = {iteam.tittle}
                tittle={ iteam.tittle }
                star={ iteam.star }
            />
        })

    }


    return <section className={ CssStyle.Con }>

        <Serch onChange={ searchHandler }/>

        <div className={ CssStyle.SideNavCon }>

            <SideNav

                onclickplace={ placeHandler }
                onclickdish={ dishHandler }  

                fistStar={ fistStarHandler}
                secondStar={ secondStarHandler }
                thirdStar={ thirdStarHaandler}
                fourthStar={ fourthStarHandler }
                fifthStar={ fifthStarHandler }

                checkboxdata={ cuisine }
                CuisineonChange={ CuisineonChangeHandler}

                priceValue={ priceValue }
                onChange={ priceingHandler }

            />

            <div className={ CssStyle.ListItemCon }>

                { containData }

            </div>
            
        </div>
        
    </section>
}

export default AdvanceFillter;
