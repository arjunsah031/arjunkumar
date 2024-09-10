import React from "react";
import CssStyle from './NotesImg.module.css';


import Image from "next/image";

const NotesImg = () => {

    return <div className={ CssStyle.Con } >

        <Image src='/Natureimg.jpg' width={100} height={100} alt='naturimgasfs' />
        <div> thoughts & notes </div>

    </div>
}

export default NotesImg;