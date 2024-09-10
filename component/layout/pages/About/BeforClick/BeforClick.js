import React from "react";
import CssStyle from './BeforClick.module.css';

import Profilephoto from '@/assets/pageimg/myphoto.jpg';
import aboutphoto from '@/assets/pageimg/Aboutimage.jpg'
import Image from "next/image";

const BeforClick = props => {

     return <div className={ CssStyle.MainCon } >

        <div className={ CssStyle.AboutPhotoCon }>

            <Image src={ aboutphoto }  className={ CssStyle.Img}  alt="profile" priority/> 

            <div className={ CssStyle.Text} >
                <div>AMBITION IS THE FIRST STEP TOWARDS</div>
                <h1> SUCCESS</h1>
            </div>

        </div>
            
        <div className={ CssStyle.Con } >

            <div className={ CssStyle.desCon}>

                <h1> ABOUT ME</h1>
                <div>
                "Hello, I'm Arjun, a passionate computer science engineering graduate with a strong foundation in the field. At 27 years old, I bring a wealth of knowledge and enthusiasm to the world of technology. With a Bachelor's degree in Computer Science, I have honed my skills and expertise in the ever-evolving realm of front-end web development, particularly in React. With over two years of professional experience in this domain, I've had the opportunity to contribute to various projects, enhancing user experiences and crafting elegant, user-friendly web interfaces. I'm dedicated to staying at the forefront of technological advancements, and I'm excited to continue my journey in the world of web development."
                </div>

                <div>

                This is a great space to write long text about your company and your services. 
                You can use this space to go into a little more detail about your company. 
                Talk about your team and what services you provide.

                </div>


                <div className={ CssStyle.btnCon }> 
                    <button onClick={ props.onClick }>Read More</button>
                </div>

    
            </div>

            <div className={ CssStyle.photoCon }>

                <Image src={ Profilephoto } className={ CssStyle.Img}  alt="profile" priority/> 

            </div>
            
        </div>

     </div>
}

export default BeforClick;