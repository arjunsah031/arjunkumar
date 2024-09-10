import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PublicSpinner from "../../../../../../Component/PublicSpinner/PublicSpinner";

import DetailProfile from "../DetailProfile/DetailProfile";

const ProfileFetchCon = () => {
    
    const token = useSelector( s => s.AuthReducer.loginAccessToken);

    const[ comType, setcomType ] = useState( 'fetingDetails')

    const[ profileDetails, setprofileDetails ] = useState(null);
    console.log(profileDetails)



    useEffect( ()=> {

        const loginHeaders = {

            headers: {

                Authorization: token 
            }

        };

        axios.get( 'https://yjv9pmdwe3.execute-api.ap-south-1.amazonaws.com/api/my-profile', loginHeaders)

        .then( response => {

            const resCode = response.data.responseCode;

            if( resCode === '001' ) {
                
                setprofileDetails(response.data.profileDetails);
                setcomType('GotDetails')
            }


        })
        .catch ( e => {
           
            alert('error')
        })


    }, [ ] )

    let containData = null;

    if( comType === 'fetingDetails') {

        containData = <PublicSpinner/>
    }
    else if( comType === 'GotDetails' ) {
        
        containData =  profileDetails && <DetailProfile 
                            
            Name = { profileDetails.fullName }
            Email = { profileDetails.emailAddress }
            Time = { profileDetails.accoutCreatedAt.monthYear+ ' ' + profileDetails.accoutCreatedAt.timeDate }
            TotalNotes = { profileDetails.totalNotes }

       

            />  

    }

    return <React.Fragment>


            { containData}
        

    </React.Fragment>
}

export default ProfileFetchCon;