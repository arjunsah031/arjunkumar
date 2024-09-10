import React from "react";
import CssStyle from './AfterClick.module.css';

import myphoto from '@/assets/pageimg/myphoto.jpg';
import nature1 from '@/assets/pageimg/nature1.jpg';
import Image from "next/image";

const AfterClick = () => {

    return <section className={ CssStyle.Con } >
        

        <div className={ CssStyle.TopicImg }>
            <Image src={ nature1 } className={CssStyle.img}  alt="natureffj" priority />
            <h1> ABOUT ME__ </h1>
        </div> 

        <div className={ CssStyle.imgDes}>

            <div>

                <h3>Passionate About Inspiring Others</h3>

                I am truly passionate about inspiring others in the field of web development. 
                I find immense joy in sharing my knowledge and experience with fellow enthusiasts, 
                fostering a community of learning and growth. 
                I am committed to staying ahead of the technological curve and am eager to continue my journey of empowering and 
                motivating others in the realm of web development."

            </div>

            <Image src={ myphoto } className={CssStyle.img} alt="natureffj" property="" />
            
        </div>

       
        <div className={ CssStyle.firstDes}>

        "Welcome to our company, where innovation and dedication converge to drive exceptional results. Founded on the vision of a dynamic team of industry experts, our story is one of passion and perseverance. 
        We set out with the goal of providing cutting-edge solutions that would redefine industry standards. Our team, comprising talented and experienced professionals, is the backbone of our success. 
        Their collective expertise forms the bedrock upon which we build, 
        ensuring that our clients receive top-tier services. 
        We offer a wide array of solutions, from software development and web design to digital marketing and consulting services. What sets us apart is our unwavering commitment to quality, 
        the ability to adapt to the evolving technological landscape, and a keen understanding of our clients' unique needs. We invite you to explore our world, 
        discover what makes us different, and experience the exceptional services that have made us a trusted name in the industry."

        </div>

         <div className={ CssStyle.secDes}>
            At Wix we’re passionate about making templates that allow you to build fabulous 
            websites and it’s all thanks to the support and feedback from users like you! Keep 
            up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. 
            Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d 
            like to benefit from a professional designer’s touch, head to the Wix Arena 
            and connect with one of our Wix Pro designers. Or if you need more help you 
            can simply type your questions into the Support Forum and get instant answers.
        </div> 

        
        <div className={ CssStyle.CerQuaCon } >

            {/* <div className={ CssStyle.certifications } >

                <h4> Certifications </h4>
                <li> I'm a title. Click here to add your own text and edit me.</li>
                <li> I'm a title. Click here to add your own text and edit me.</li>
                <li> I'm a title. Click here to add your own text and edit me.</li>
              
            </div> */}

            <div className={ CssStyle.Qualifications } >

                <h4> Skill </h4>
                <li> Proficiency in HTML (Hypertext Markup Language) for structuring web content.</li>
                <li> Proficiency in CSS (Cascading Style Sheets) for styling and layout of web pages.</li>
                <li> Proficiency in JavaScript for creating interactive and dynamic elements on web pages.</li>
                <li>Familiarity with CSS preprocessors such as css module for more efficient and maintainable CSS.</li>
                <li>Experience with front-end library of JavaScript such as React js for building complex and interactive user interfaces.</li>
                <li>Experience with front-end frameworks such as next js of react js for building complex and interactive user interfaces.</li>
            

            </div>

        </div>

    </section>
}

export default AfterClick;