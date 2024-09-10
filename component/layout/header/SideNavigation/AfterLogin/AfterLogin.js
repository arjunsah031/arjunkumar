import React from "react";
import CssStyle from './AfterLogin.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";


import { closeSideNavationActio } from '@/Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion';

import { signOut } from "next-auth/react";
import NavPage from "../NavPage/NavPage";

const AfterLogin = () => {

    const router = useRouter()
   
    const dispatch = useDispatch();

    const MynoteHandler = () => {
        router.push("/")
        dispatch(closeSideNavationActio())   
    }

    const logoutHandler = () => {

        dispatch(closeSideNavationActio())
        signOut()
        router.push('/') 
    }

    return  <div className={ CssStyle.Con } >

                <NavPage/>   

                <div className={ CssStyle.MynoteCon}>  
                   <button onClick={ MynoteHandler } className={ CssStyle.Btn } > MYNOTE </button>
                </div>

               <div className={ CssStyle.LogoutCon }>

                    <button onClick={ logoutHandler } className={ CssStyle.Btn } > LOGOUT </button>
               </div>

               {/* <div className={ CssStyle.profileCon }> 

                    <DetailProfile

                        Name = { profileDetailsofClint.fullName }
                        Email = { profileDetailsofClint.gmailAddress }
                        Time = { profileDetailsofClint.time.monthYear+ ' ' + profileDetailsofClint.time.timeDate }
                        TotalNotes = { profileDetailsofClint.totalNote }
                        
                    />
              
               </div> */}

            </div>
}

export default AfterLogin;