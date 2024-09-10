"use client"
import Link from "next/link";
import CssStyle from './CommonNav.module.css';
import { usePathname } from "next/navigation";


export default function CommonNav() {
    
    const pathName = usePathname()
    
    return <div className={ CssStyle.Con } > 

            <ul className={ CssStyle.ul } >

                        <li className={ CssStyle.Li } >

                            <Link href="/about" 
                            className={ pathName.startsWith('/about') ? CssStyle.Active : CssStyle.Link}  >ABOUT </Link>

                        </li>

                        <li className={ CssStyle.Li } >

                            <Link href="/contact" 
                            className={ pathName.startsWith('/contact') ? CssStyle.Active : CssStyle.Link}  >CONTACT </Link>

                        </li>

                        <li className={ CssStyle.Li } >

                            <Link href="/course" 
                            className={ pathName.startsWith('/course') ? CssStyle.Active : CssStyle.Link}  >COURSE </Link>

                        </li>
                        <li className={ CssStyle.Li } >

                            <Link href="/test" 
                            className={ pathName.startsWith('/test') ? CssStyle.Active : CssStyle.Link}  >PROJECT </Link>

                        </li>

                        <li className={ CssStyle.Li } >

                            <Link href="/blog" 
                            className={ pathName.startsWith('/blog') ? CssStyle.Active : CssStyle.Link} > BLOG </Link>

                        </li>                  

            </ul>



</div>

}