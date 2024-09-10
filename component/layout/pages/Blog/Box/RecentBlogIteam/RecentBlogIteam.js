import React from "react";
import CssStyle from './RecentBlogIteam.module.css';
import Image from "next/image";

const RecentBlogIteam = props => {
    return <div onClick={ props.onClick } className={ CssStyle.Con }>

        <div className={ CssStyle.BlogIteamCon } >  

            <img src={ props.url}   alt='blogiconss'/>   

        </div>

        <h5 className={ CssStyle.firsttittle }> {props.tittle } </h5>


        <div className={ CssStyle.ViewCommentCon } >

            <div className={ CssStyle.viewComment}>

                <div className={ CssStyle.View}> 0 views </div>
                <div className={ CssStyle.Comments }> { props.comment } Comments</div>

            </div>

            <div className={ CssStyle.LikeCon } >

                <span> {props.totalLike } </span>
                <Image src="/Heart.png" width={50} height={50}  alt='likeiconss'/>
                
            </div>

        </div>
        

    </div>
}

export default RecentBlogIteam;