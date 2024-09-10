"use client"

import React from "react";
import CssStyle from './Signup.module.css';

import { useDispatch, useSelector } from "react-redux";

import MyModel from "@/reusableui/MyModel/MyModel";
import { OPNE_CLOSE_SIGNUP_LOGIN } from "@/reusableui/MyCustumConstat/MyCustumConstat";
import { showBox } from "@/Store/Actions/LoginSignupBox/LoginSignupBox";
import SignupCom from "./SignupCom/SignupCom";
import Login from "../Logn/Logn";


const Signup = props => {

    const LoginSignupBox = useSelector( state => state.LoginsignupBox.showLoginSignBox);
    console.log(LoginSignupBox)
    
    const dispatch = useDispatch();

    const closeHandler = () => {

        dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.closeBox))

    }

    const LoginboxHandler = () => {
        
        dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.openloginBox));
            
    }

        
    return <React.Fragment>

            { LoginSignupBox === OPNE_CLOSE_SIGNUP_LOGIN.openSignupBox && <MyModel className = { CssStyle.Con}  onClick={ closeHandler} tittle="Signup" closeBtn='&#10005;'  >
            
                        <SignupCom/>
                        <Login/>

                     <div className={ CssStyle.LoginCon} >if you have already Resister <span onClick={LoginboxHandler}>Login</span></div>
 
            </MyModel> }


            { LoginSignupBox === OPNE_CLOSE_SIGNUP_LOGIN.openloginBox && <MyModel className = { CssStyle.Con}  onClick={ closeHandler} tittle="Signup" closeBtn='&#10005;'  >
            
                    <Login/>

                    <div className={ CssStyle.LoginCon} >if you have already Resister <span onClick={LoginboxHandler}>Login</span></div>

            </MyModel> }
            
    </React.Fragment>
}

export default Signup;