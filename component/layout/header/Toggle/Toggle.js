"use client";

import React from "react";
import CssStyle from './Toggle.module.css';

import { useDispatch, useSelector } from "react-redux";
import { openSideNavigationAction } from "@/Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";


const Toggle = () => {

    const openCloseSideNavigation = useSelector( state => state.OpenCloseSideNavigation.OpenCloseSideNavigation);
    
    const dispatch = useDispatch();
    const ToggleHandleer = () => {

        dispatch( openSideNavigationAction())
          
    }

    let toggledata = <React.Fragment>

                        <span className={ CssStyle.Span }></span>
                        <span className={ CssStyle.Span }></span>
                        <span className={ CssStyle.Span }></span>

                    </React.Fragment>

        if( openCloseSideNavigation ) {
            
             toggledata =   <React.Fragment>

                                    <span className={ CssStyle.Span }></span>

                            </React.Fragment>

        }            

        return <div onClick={ ToggleHandleer} className={ CssStyle.Con } >

                {  toggledata }
                
        </div>
}

export default Toggle;