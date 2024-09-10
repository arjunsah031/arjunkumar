import React, { useState } from "react";
import CssStyle from './LogoutHandler.module.css';

import MyModel from "@/reusableui/MyModel/MyModel";
import PublicSpinner from "@/reusableui/PublicSpinner/PublicSpinner";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


const LogoutHandler = props => {
   
    const router = useRouter()
    const[isLogout, setisLogout ] = useState(false)

    const logoutHandler = () => {

        setisLogout(true);
        signOut()
        router.push('/')
        
          
    }


    return <React.Fragment>

        { isLogout && <MyModel style = { { height: '10%',border : 'none',top:'120px'} } >

        <PublicSpinner/>
        </MyModel>}
      

        <div className={  CssStyle.Con }> 

            <button onClick={ logoutHandler } className={ CssStyle.LogoutBtn}> LOGOUT </button>

        </div>

    </React.Fragment>
}

export default LogoutHandler;