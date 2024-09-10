"use client"

import { useDispatch,} from "react-redux";

import { OPNE_CLOSE_SIGNUP_LOGIN } from "@/reusableui/MyCustumConstat/MyCustumConstat";
import {  showBox } from '@/Store/Actions/LoginSignupBox/LoginSignupBox';

import CssStyle from './BeforLogin.module.css';
import CommonNav from "../CommonNav/CommonNav";

export default function BeforLogin () {

    const dispatch = useDispatch();

    const signupBoxHandler = () => {

        dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.openSignupBox))  
    }

    return  <div className={ CssStyle.Con } >
                
                <CommonNav/>

                <div className={ CssStyle.LoginSignupCon }>

                    <button onClick={ signupBoxHandler } className={ CssStyle.LoginSignupBtn } >
                        Signup
                    </button>

                </div> 
                
            </div>
}
