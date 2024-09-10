"use client"
import React from "react";
import CssStyle from './SideNavigation.module.css';
import SnContainer from "./SnContainer/SnContainer";
 import { useSession } from "next-auth/react";
import AfterLogin from "./AfterLogin/AfterLogin";
 import BeforLogin from "./BeforLogin/BeforLogin";
import SosalMedia from "@/reusableui/SosalMedia/SosalMedia";

const SideNavigation = () => {

    const { data: session } = useSession()

    return <SnContainer>

                { !session && <BeforLogin/>}
        
                { session && <AfterLogin/>}

                <div className={ CssStyle.Con}>

                    <SosalMedia

                        className = { CssStyle.Social}
                        color = 'white' 
                        size = '35px' 
                    />
                </div>

            </SnContainer>
            
}

export default SideNavigation;