"use client"
import React,{ useState, useEffect } from "react";
import CssStyle from './ContactForm.module.css';

import Contactformbtn from "./Contactformbtn/Contactformbtn";
import Input from "./Input/Input";
import axios from "axios";

const ContactForm = () => {

    const [ name, setName ] = useState( '');
    const [ email, setEmail ] = useState( '');
    const [ textArea, setTextarea ] = useState('')

    const [ spining, setSpining ] = useState(false);
    const [ messages, setMessages ] = useState('')

    const nameHandler = event => {

        setName(event.target.value)
    }

    const emailHandler = event => {

        setEmail(event.target.value);
    }

    const textAreaHandler = event => {

        setTextarea(event.target.value); 
    }

    const submitHandler = () => {

        setSpining(true)


        const Postdata = {
            name : name,
            email : email,
            message : textArea,
        }

        axios.post('https://formspree.io/f/mgeqkzvq', Postdata)
        .then ( () => {
            setSpining(false)
            setMessages('thanks for support');
            setEmail('')
            setName('')
            setTextarea('')

            setTimeout(() => {

                setMessages('')
                
            }, 2000);

        })
        .catch( () => {

            setMessages('some this is wrong')

            setTimeout(() => {

                setMessages('')
                
            }, 2000);

            setSpining(false)
           

        })

    }


    return <div className={ CssStyle.Con }>

        <Input

            label='Enter your Name'
            type='text'
            placeholder='Enter your Name'
            onChange={ nameHandler } 
            value={ name}
              
        />

        <Input

            label='Enter your Email'
            type='text'
            
            placeholder='Enter your Email'
            onChange = { emailHandler }
            value={ email}
            
        />

        <div className={ CssStyle.textAreaCon }>
            <label> Message</label>

           <textarea 

                className={ CssStyle.TextArea }
                type='text'
                placeholder='Enter your subject'
                onChange = { textAreaHandler }
                value = { textArea }

           />

            
        </div>

        <Contactformbtn

            BtnName = 'SUBMIT'
            onClick = { submitHandler }
            isspining={ spining }
            issucess={ messages}
                    
        />

    </div>
}

export default ContactForm;