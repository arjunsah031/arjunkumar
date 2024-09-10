"use client";

import React from "react";
import CssStyle from './Navigation.module.css';
import intro from '@/assets/footerimg/introduction.png'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "styled-jsx/css";

export default function Navigation() {

    const pathName = usePathname()

    return <ul className={ CssStyle.Con } >
    
            <li className={ CssStyle.Li } >
    
                <Link href="/test" className={ pathName.startsWith('/basic') ? 
                            CssStyle.Active : CssStyle.Link}  >TEST 
                </Link>   
        
            </li>

           
    
            <li className={ CssStyle.Li } >
    
                <Link href="/advance" className={ pathName.startsWith('/advance') ? 
                            CssStyle.Active : CssStyle.Link}  >ABOUT 
                </Link>
    
            </li>

            <li className={ CssStyle.Li } >
    
                <div className={ CssStyle.imgCon}>
                      <Image src={ intro} className={CssStyle.img} alt="introduction" property="" />
                </div>
            </li>
    
    
            <li  className={ CssStyle.Li } >
    
                <Link href="/max" className={ pathName.startsWith('/max') ? 
                            CssStyle.Active : CssStyle.Link}  >MAX 
                </Link>
    
            </li>
    
            
            <li className={ CssStyle.Li } >
    
                <Link href="/artical" className={ pathName.startsWith('/artical') ? 
                            CssStyle.Active : CssStyle.Link}  >ABOUT 
                </Link>
    
            </li>        
    
        </ul>
}
