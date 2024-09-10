import React, { useState }  from "react";
import CssStyle from './SnContainer.module.css';
import Image from "next/image";

import closeicon from '@/assets/headerimg/cart.png'
import { useDispatch, useSelector } from "react-redux";
import { closeSideNavationActio } from "@/Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";

const SnContainer = props => {

    const openCloseSideNavigation = useSelector( state => state.OpenCloseSideNavigation.OpenCloseSideNavigation);
    
    const CssStyles = [ CssStyle.Con, openCloseSideNavigation ? CssStyle.CloseNavigation : CssStyle.OpenNavigation ]

    const dispatch = useDispatch();

    const CloseSideNavigatinHandler = () => {

        dispatch( closeSideNavationActio());

    }

    return <React.Fragment>

        { openCloseSideNavigation && <div onClick={ CloseSideNavigatinHandler } className={ CssStyle.Layer } > helel </div> }
        { openCloseSideNavigation && <div  className={ CssStyles.join(' ')}>

                    <div className={ CssStyle.closeBtn }><Image onClick={ CloseSideNavigatinHandler } src="/icons8-close-91.png" width={50} height={50} alt=" clos"/></div>
                   { props.children} 
                </div>}
        

    </React.Fragment>

     

       
}

export default SnContainer;