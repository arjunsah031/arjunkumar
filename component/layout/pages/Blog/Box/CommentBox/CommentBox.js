"use client";
import React, { useState } from 'react';
import CssStyle from './CommentBox.module.css';
import CommentList from '../CommentList/CommentList';
import Image from 'next/image';

const CommentBox = props => {

    const [opencloseCommentBox, setopenclosComementBox ] = useState(false);
    const [addComment, setAddComment ] = useState(false);

    const [ data, setData ] = useState([]);
    console.log(data)
  
     

    const [ text, setText ] = useState('')
    

    const  opencloseMessboxHandler = props => {
        setopenclosComementBox( (s) => !s)

    }
    const addCommentHandler = () => {

        setAddComment( s => !s)
    }

    const onchangeHandler = event => {

        setText(event.target.value)

    }

    const postdataHandler = () => {

        const postdata = {
           
        }

        setData( ( previusdata ) =>  {

            return [ ...previusdata, {  text : text,id : Math.random() }]
        })

    }

  

    return <div className={ CssStyle.Con }>
 
        <h1>COMMENTS</h1>

        { !opencloseCommentBox && <div className={ CssStyle.InputCon } onClick={ opencloseMessboxHandler } > 

                <Image src="/profile.png" width={50} height={50} alt='commenticons'/>

                <input  type="text" placeholder='Write a Comments'  />
                
        </div>}

        { opencloseCommentBox && <div className={ CssStyle.CommentCon }  > 

                
                    <img className={ CssStyle.AdminCon } src="/profile.png" width={50} height={50}  alt='commenticons'/>

                   
                    <div className={ CssStyle.Comment}> 

                       
                        <textarea onChange={ onchangeHandler } type="text" placeholder='Write a Comments' />

                        <div className={ CssStyle.addemojiCon}> 

                            <div className={ CssStyle.imgIcon } >

                                <Image className={CssStyle.Img} src="/Camara.png" width={50} height={50} alt="ProfileIconicon" />
                                <Image className={CssStyle.Img} src="/emoji.png" width={50} height={50} alt="emogiIconicon" />
                                <Image className={CssStyle.Img} src="/Gif.png" width={50} height={50} alt="giftIconicon" />
                                <Image className={CssStyle.Img} src="/Camara.png" width={50} height={50} alt="videoicon" />

                            </div>

                            <div className={ CssStyle.AddimgCon }> 
                                <img onClick={ addCommentHandler } src="/AddIcon.png" width={50} height={50}  alt="addicons" />
                            </div>

                            <div className={ CssStyle.CommentControl}>

                                <button onClick={ opencloseMessboxHandler } className={ CssStyle.Cancel }  > CANCEL </button>
                                <button onClick={ postdataHandler } className={ CssStyle.Public } > PUBLIC </button>
                            </div>

                        </div> 
                    </div> 

                    { addComment && <div className={ CssStyle.AddCommentCon }> 

                        <h2> Add your Comment </h2>

                        <div className={ CssStyle.AddCommentimgIcon } >

                            <Image className={CssStyle.Img} src="/Camara.png" width={50} height={50} alt="ProfileIconicon" />
                            <Image className={CssStyle.Img} src="/emoji.png" width={50} height={50} alt="emogiIconicon" />
                            <Image className={CssStyle.Img} src="/Gif.png" width={50} height={50} alt="giftIconicon" />
                            <Image className={CssStyle.Img} src="/Camara.png" width={50} height={50} alt="videoicon" />

                        </div>


                    </div> }      
        </div>}

        { data.map( iteam => {

            return <CommentList

                text = { iteam.text} 

            />
        })}
        
        
    </div>
}

export default CommentBox;