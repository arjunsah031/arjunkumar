"use client"
import React, { useState } from "react";
import CssStyle from './FormWork.module.css';

const FormWork = () => {

    const[ enterAge, setEnterAge ] = useState('');
    const[ touchAgeInput, setTouchedAgeInput ] = useState(false)

    const isAgeValid = enterAge.trim() === '';
    const AgeInputValid = isAgeValid && touchAgeInput;

    const[ enterName, setEnterName ] = useState(''); 
    const[ touchedNameInput, settouchedNameInput ] = useState(false);

    const isNameValid = enterName.trim() === '';
    const nameInputvalidation = isNameValid && touchedNameInput;


  

    const AgeChangeHander = event => {

        setEnterAge(event.target.value)
    }

    const AgeBlurHandler = () => {

        setTouchedAgeInput(true)
    }

    const nameChangeHander = event => {
      
      setEnterName(event.target.value);
       
    }

    const nameBlurHandler = () => {

        settouchedNameInput(true)
    }

    let isformvalid = false;

    if(!isNameValid && !isAgeValid ) {

        isformvalid = true;

    }

    const SubmitHandler = event => {

        event.preventDefault();

        if(isNameValid && isAgeValid  ) {

            settouchedNameInput(true);
            setTouchedAgeInput(true)

            return;
        }

        setEnterName('');
        settouchedNameInput(false)
        setEnterAge('');
        setTouchedAgeInput(false);
       
    }

    const inputValidclases = nameInputvalidation ? 
                            (CssStyle.invalidInput):
                            (CssStyle.Input) ;

    const ageclass = AgeInputValid ?
                    (CssStyle.invalidInput):
                    (CssStyle.Input) ;

    return <section className={ CssStyle.Con } >

           <form  className={ CssStyle.Form}>
                
                <div className={ CssStyle.InputCon } > 

                    <label> Enter your Name </label>
                    <input 
                        className={ inputValidclases }
                        type='text' 
                        placeholder='enter your name '
                        onChange={ nameChangeHander }
                        value={ enterName }
                        onBlur={ nameBlurHandler }
                        />
                        
                   { nameInputvalidation && <span> Name is required </span>} 

                </div>

                 <div className={ CssStyle.InputCon } > 

                    <label> Enter your Age </label>
                    <input 
                        className={ ageclass }
                        type='number' 
                        placeholder='enter your Age '
                        onChange={ AgeChangeHander }
                        value={ enterAge }
                        onBlur={ AgeBlurHandler }
                        />
                        
                   { AgeInputValid && <span> Age  is required </span>} 

                </div> 

                <div className={ CssStyle.BtnCon }>

                    <button disabled={!isformvalid} onClick={ SubmitHandler }  className={ CssStyle.Btn }> submit </button>

                </div>  

           </form>
       

    </section>
}

export default FormWork;