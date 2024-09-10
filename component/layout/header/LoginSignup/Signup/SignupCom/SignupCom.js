"use client"

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustBtn from "../../Com/CustBtn/CustBtn";
import CustumInput from "../../Com/CustumInput/CustumInput";
import CssStyle from './SignupCom.module.css';
import { sanitizeEmail } from "@/reusableui/MyLogic/InputValidation";
import { validateEmailAddress } from "@/reusableui/MyLogic/InputValidation";
import { showBox } from "@/Store/Actions/LoginSignupBox/LoginSignupBox";
import { OPNE_CLOSE_SIGNUP_LOGIN } from "@/reusableui/MyCustumConstat/MyCustumConstat";


async function createUser(username, email, password) {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  
    return data;
  }

const SignupCom = props => {

    const dispatch = useDispatch();

    const LoginSignupBox = useSelector( state => state.LoginsignupBox.showLoginSignBox);

    const[ fullName, setfullName ] = useState('');
    const[ fullNameError, setfullNamelError ] = useState(null);
    

    const[ gmail, setgmail ] = useState('');
    const[ gmailError, setgmailError ] = useState(null);

    const[ password, setpassword ] = useState('')
    const[ passwordError, setpasswordError ] = useState(null)

    const[ spinner, setspinner ] = useState(false)
    const[ server, setserver ] = useState('')
     
  

    const fullnameHandler = event => {

        const enterFullName = sanitizeEmail(event.target.value)
        
        if(enterFullName.length < 51) {

            setfullName(enterFullName);

        }  

    }

    const gmailHandler = event => {
        
        const enterGmail = sanitizeEmail(event.target.value)
        
        if(enterGmail.length < 51) {

            setgmail(enterGmail);

        }    
    }

    const passwordHandler = event => {

        const enterPassword = event.target.value;

        if(enterPassword.length <30) {

            setpassword(enterPassword);
        } 
    }

    async function SignupHandler () {

        let valideInputCount = 0;

        if( fullName < 1 ) {

            setfullNamelError('fullName is required..')

        }
        else if( fullName.length > 8) {

            setfullNamelError(null);
            valideInputCount = valideInputCount + 1;

        }
        else {

            setfullNamelError('Invalid fullName.')
        }

        if( gmail.length < 1 ) {

            setgmailError('gmail is required..')
        }
        else if( validateEmailAddress(gmail) === 'VALID_EMAIL_ADDRESS') {

            setgmailError(null);
            valideInputCount = valideInputCount + 1;

        } else {

            setgmailError('Invalid email address.')

        }

        if( password < 1 ) {

            setpasswordError('Password is required..')

        }
        else if( password.length > 4) {

            setpasswordError(null);
            valideInputCount = valideInputCount + 1;

        }
        else {

            setpasswordError('Invalid password.')
        }

        if( valideInputCount === 3) {

            setspinner(true)

           
            try {
                const result = await createUser(fullName, gmail, password);
                
                setspinner(false)
                setserver(true)
                
                setserver(result.message);
                dispatch(showBox(OPNE_CLOSE_SIGNUP_LOGIN.openloginBox))
                
              } catch (error) {
                setspinner(false)
                setserver(error.message)
                
              }
              

        }
        
    }
   
    return <React.Fragment>
        
                <CustumInput

                    tittle='Enter FullName.'
                    type="text"
                    placeholder=' Enter FullName.'
                    onChange={ fullnameHandler }
                    value={ fullName }
                    errorMessage={ fullNameError }
                />

                <CustumInput

                    tittle='Enter Your Gmail.'
                    type="text"
                    placeholder=' Enter Your Gmail..'
                    onChange={ gmailHandler }
                    value={ gmail }
                    errorMessage={ gmailError }
                />
                <CustumInput

                    tittle='Enter  Password..'
                    type="text"
                    placeholder=' Enter Password..'
                    onChange={ passwordHandler }
                    value={ password }
                    errorMessage={ passwordError }
                
                />

                <div className={CssStyle.serverErrorCon}> {server}</div>
                <CustBtn 

                    onClick={ SignupHandler }  
                    btnName=' SIGNUP '
                    isClickedBtn={spinner}
                    sendingServer='Logining..'
                    
                />
                    

    </React.Fragment>
}

export default SignupCom;