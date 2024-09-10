"use client"
import React from "react";
import CssStyle from './navigation.module.css'
import BeforLogin from "./BeforLogin/BeforLogin";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from '@/assets/headerimg/cart.png';

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AfterLogin from "./Afterlogin/AfterLogin";
import css from "styled-jsx/css";
// import AfterLogin from "./Afterlogin/AfterLogin";

export default function Navigation() {

    const { data: session } = useSession()
    

    const CartItam =  useSelector( s => s.AddtoCartReducer.addtocart)


    return <div className={CssStyle.Con}>

            <div className={CssStyle.pagenav}>
                {!session && <BeforLogin/>} 

                { session && <AfterLogin/>}
            </div>

            <div className={CssStyle.cartnav}>
                <Link href='/cart' className={ CssStyle.CartCon } >

                    <Image className={CssStyle.img} src={cartIcon} alt="Picture of the author" priority />
                    <span> { CartItam.length} </span>

                </Link>
            </div>
           
    </div>
}