"use client"
import React, { useEffect, useState } from "react";

import CssStyle from './Blog.module.css';
import BlogIteam from "./Box/BlogIteam/BlogIteam";
import Box from "./Box/Box";
import CommentBox from "./Box/CommentBox/CommentBox";
import RecentBlogIteam from "./Box/RecentBlogIteam/RecentBlogIteam";
import SingleBlogIteam from "./Box/SingleBlogIteam/SingleBlogIteam";
import { Dummydata } from "./Dummydata/Dummydata";
import NotesImg from "./NotesImg/NotesImg";
import { useRouter } from "next/navigation";

const Blog = () => {

    const [blogData, setBlogData ] = useState([]);
    const [ blogDetails, setblogDetails ] = useState([]);

    const [ recentBlogIteam, setRecenBlogIteam ] = useState([])

    console.log(recentBlogIteam)

    const [ data, setData ] = useState('blogdata') //blogDetails recentblog

    useEffect( () => {

        setBlogData( Dummydata) 

    }, [] );

    
       

    const blogDetailsHandler = id => {

        const fillterdata = blogData.filter( iteam => iteam.id === id);
        setData('blogDetails')
        setblogDetails(fillterdata)
        const datas = blogData.length;
        const filtedata = blogData.filter( iteam => iteam.id >=  datas - datas+3)
        setRecenBlogIteam(filtedata.reverse())
    }

    const backHandler = () => {
        setData('blogdata')

    }

    const allBlogHandler = () => {
        
        setRecenBlogIteam(blogData)
    }

    

    let containdata;

    if( data === 'blogDetails') {
        containdata = blogDetails.map( iteam => {

            return <Box>

                <div className={ CssStyle.BackbtnCon }> 
                    <button onClick={backHandler} className={ CssStyle.Backbtn } > back</button>
                </div>
                

                <SingleBlogIteam

                    key = { iteam.id}
                    admin = {iteam.admin}
                    comment ={iteam.comment} 
                    des = { iteam.des}
                    id= {iteam.admin}
                    tittle = {iteam.tittle }
                    totalLike = {iteam.totalLike }
                    url = {iteam.url }
 
                />

                <div className={ CssStyle.Recentblog } > 
                    <div className={ CssStyle.AllBlogCon } >
                        <div> Recent Blog</div>
                        <button onClick={ allBlogHandler }> All Blog..  </button>
                    </div>

                   { recentBlogIteam.map( iteam => {
                        
                        return <RecentBlogIteam

                            key = { iteam.id } 
                            tittle = {iteam.tittle }
                            url = {iteam.url }
                            onClick = { () =>blogDetailsHandler(iteam.id) }
                        
                        />
                   })}
                  
                    
                </div>

                <CommentBox/>

            </Box>
        })
    } else if ( data === 'blogdata' ) {
        containdata = blogData.map( iteam => {

            return <Box>

                <BlogIteam

                    key = { iteam.id}
                    admin = {iteam.admin}
                    comment ={iteam.comment}
                    des = { iteam.des}
                    id= {iteam.admin}
                    tittle = {iteam.tittle }
                    totalLike = {iteam.totalLike }
                    url = {iteam.url }
                    onClick = { () =>blogDetailsHandler(iteam.id) }
                />

                

            </Box>
        })
    }

    return <section className={ CssStyle.Con }>

        <NotesImg/>

        { containdata }

    </section>
}

export default Blog; 