"use client"

import React, { useEffect } from "react";


export default function ReDirectBankPage(props) {

    const bankReDirectFromDetails = props.bankReDirectFromDetails;
    
    useEffect( () => {

        if( bankReDirectFromDetails.hasOwnProperty('actionUrl') ) {

            document.getElementById('ltiLaunchForm').submit();

        }

    }, [] );


    return (

        <form 

            id="ltiLaunchForm" 
            style={{ display: 'none' }} 

            action={ bankReDirectFromDetails.actionUrl } 
            method={ bankReDirectFromDetails.formMethod }
            type={ bankReDirectFromDetails.pageType } 
            enctype={ bankReDirectFromDetails.enctype } 
        >
    
            { bankReDirectFromDetails.content.map( ( inputMe, ind ) => <input 
                                                                            key={ ind } 
                                                                            type="text" 
                                                                            name={ inputMe.name } 
                                                                            value={ inputMe.value } 
                                                                        /> 
            ) }


            <input type="submit" />
            
        </form>
        
    );

}





