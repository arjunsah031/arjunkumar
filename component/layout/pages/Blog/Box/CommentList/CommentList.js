import React from "react";
import CssStyle from './CommentList.module.css';

import Image from "next/image";

const CommentList = props => {

    return <div className={ CssStyle.Con }>

        <div className={ CssStyle.UserCon }>

            <Image src="/profile.png" width={50} height={50} alt='profiles' />
            <span className={ CssStyle.user}> UsareName </span>

        </div>

        <span className={ CssStyle.text } > { props.text } </span>

    </div>
} 

export default CommentList;