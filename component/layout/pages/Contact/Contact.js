import React from "react";
import CssStyle from './Contact.module.css';
import ContactForm from "./ContactForm/ContactForm";
import Contacttittle from "./Contacttittle/Contacttittle";
import Googlemap from "./Googlemap/Googlemap";

const Contact = () => {

    return <section className={ CssStyle.MainCon }>

        <div className={ CssStyle.Con } >

            <Contacttittle/>
            <ContactForm/>

        </div>
  
        <Googlemap/>

    </section>
}

export default Contact;