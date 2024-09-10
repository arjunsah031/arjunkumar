import React from "react";
import CssStyle from './SingleBlogIteam.module.css';


import Image from "next/image";

const SingleBlogIteam = props => {

    return <div onClick={ props.onClick } className={ CssStyle.Con } >
 

        <div className={ CssStyle.Admine } >
            <Image src="/Adminicon.png" width={50} height={50}  alt="adminicons" />  
            { props.admin } 
        </div>

        <h3 className={ CssStyle.firsttittle }> {props.tittle } </h3>

        <div className={ CssStyle.firstDes } > { props.des}  </div>

        <div className={ CssStyle.BlogIteamCon } >  

            <img src={ props.url}   alt='blogiconss'/>   

        </div>

        <div className={ CssStyle.secDes }> {props.secDes } Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </div>

        <h3 className={ CssStyle.secttittle }> {props.sectittle } Create Relevant Content </h3>

        <div className={ CssStyle.thirdDes }>  {props.thirdDes } Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content.


                                                    Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.  </div>


        <div className={ CssStyle.ViewCommentCon } >

            <div className={ CssStyle.viewComment}>

                <div className={ CssStyle.View}> 0 views </div>
                <div className={ CssStyle.Comments }> { props.comment } Comments</div>

            </div>

            <div className={ CssStyle.LikeCon } >

                <span> {props.totalLike } </span>
                <Image src="/Heart.png" width={50} height={50} alt='likeiconss'/>
                
            </div>

        </div>
  

</div>
}

export default SingleBlogIteam;