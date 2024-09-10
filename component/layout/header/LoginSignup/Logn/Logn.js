"use client"

import React, { useState } from "react";

import CssStyle from './Logn.module.css';
import { useDispatch, useSelector } from "react-redux";

import CustumInput from "../Com/CustumInput/CustumInput";
import MyModel from "@/reusableui/MyModel/MyModel";
import CustBtn from "../Com/CustBtn/CustBtn";

import { sanitizeEmail, validateEmailAddress } from '@/reusableui/MyLogic/InputValidation';
import { DOMAIN_URL, OPNE_CLOSE_SIGNUP_LOGIN } from "@/reusableui/MyCustumConstat/MyCustumConstat";
import { showBox } from "@/Store/Actions/LoginSignupBox/LoginSignupBox";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";


const Login = () => {

    const route = useRouter()

    const LoginSignupBox = useSelector( state => state.LoginsignupBox.showLoginSignBox);
    
    const[ gmailValue, setgmailValue ] = useState('');
    const[ gmailError, setgmailError ] = useState(null);

    const[ passwordValue, setpasswordValue ] = useState('')
    const[ passwordError, setpasswordError ] = useState(null)

    const[ spinner, setspinner ] = useState(false)

    const [ erromessage, seterrormessage] = useState('')
     
    const dispatch = useDispatch();

    const gmailHandler = event => {
        
        const enterGmail = sanitizeEmail(event.target.value)
        

        if(enterGmail.length < 51) {

            setgmailValue(enterGmail);
        }    
    }

    const passwordHandler = event => {

        const enterPassword = event.target.value;

        if(enterPassword.length <30) {

            setpasswordValue(enterPassword);
        } 
    }

    async function LoginHandler () {

        let valideInputCount = 0;
        
        if( gmailValue.length < 1 ) {

            setgmailError('gmail is required..')
        }
        else if( validateEmailAddress(gmailValue) === 'VALID_EMAIL_ADDRESS') {

            setgmailError(null);
            valideInputCount = valideInputCount + 1;

        } else {

            setgmailError('Invalid email address.')

        }

        if( passwordValue < 1 ) {

            setpasswordError('Password is required..')

        }
        else if( passwordValue.length > 4) {

            setpasswordError(null);
            valideInputCount = valideInputCount + 1;

        }
        else {

            setpasswordError('Invalid password.')
        }

        if( valideInputCount === 2 ) {

            setspinner(true)

            console.log(gmailValue, passwordValue)
            
            
              try{

                const result = await signIn("credentials", {
                    redirect: false,
                    email : gmailValue,
                    password : passwordValue,
                  });
              
                  if (result?.ok) {
                    setspinner(false)
                    window.location.href = "/"; 
                    dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.closeBox))
                  } else {
                    seterrormessage(result.error)
                    setspinner(false)
                  }
    
              }catch (error) {
                setspinner(false)
                console.log('yes')

              }
        
    }
}
    const closeHandler = () => {

       dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.closeBox))
    }

    const signupBoxHandler = () => {

        dispatch( (OPNE_CLOSE_SIGNUP_LOGIN.openSignupBox))  

    }

    return <React.Fragment>
        
            { LoginSignupBox === OPNE_CLOSE_SIGNUP_LOGIN.openloginBox && <MyModel  tittle="Login" closeBtn='&#10005;' onClick = { closeHandler }>

                <CustumInput
                    tittle='Enter Resister gmail..'
                    type="text"
                    placeholder=' Enter your login gmail.'
                    onChange={ gmailHandler }
                    value={ gmailValue }
                    errorMessage={ gmailError } 
                
                />
                <CustumInput
                    tittle='Enter your password..'
                    type="text"
                    placeholder=' Enter password'
                    onChange={ passwordHandler }
                    value={ passwordValue }
                    errorMessage={ passwordError }
                
                />

                <div className={ CssStyle.ServerError}> {erromessage} </div>

                <CustBtn 
                    onClick={ LoginHandler }  
                    btnName=' LOGIN '
                    isClickedBtn={spinner}
                    sendingServer='Logining..'
                    />

                    <div className={ CssStyle.LoginCon} >if you have Resister than 
                    <span onClick={signupBoxHandler}>signup</span></div>


                    
            </MyModel> }

            

        </React.Fragment>
}

export default Login;