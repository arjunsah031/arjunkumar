"use client"
import React from "react";
import CssStyle from './NavPage.module.css';
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { closeSideNavationActio } from "@/Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";



const NavPage = () => {

    const router = useRouter()
    const dispatch = useDispatch();

    const basicPtHander = () => {

        router.push("/about")
        dispatch(closeSideNavationActio())
    }

    const advancePtHandler = () => {

        router.push("/contact")
        dispatch(closeSideNavationActio())
    }

    const maxPtHander = () => {

        router.push("/blog")
        dispatch(closeSideNavationActio())
    }

    const planHandler = () => {

        router.push("/course")
        dispatch(closeSideNavationActio())

    }

    const projectHandler = () => {

        router.push("/test")
        dispatch(closeSideNavationActio())

    }


    return  <div className={ CssStyle.Con } >

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ basicPtHander } className={ CssStyle.Btn } > ABOUT </button>
                </div>

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ advancePtHandler } className={ CssStyle.Btn } > CONTACT</button>
                </div>

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ maxPtHander } className={ CssStyle.Btn } > BLOG </button>
                </div>

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ planHandler } className={ CssStyle.Btn } > PLAN </button>
                </div>
                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ projectHandler } className={ CssStyle.Btn } > PROJECT </button>
                </div>

            </div>
}

export default NavPage;