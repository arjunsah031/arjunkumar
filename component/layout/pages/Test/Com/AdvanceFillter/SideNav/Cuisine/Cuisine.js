import React from "react";
import ChakeBoxBtn from "./ChakeBoxBtn/ChakeBoxBtn";
import CssStyle from './Cuisine.module.css';

const Cuisine = props => {

    const  users = props.checkboxdata;

    

    return <div className={ CssStyle.Con }>

            <div> OPTION </div>


            { users.map( (user ) => {

                return <ChakeBoxBtn
                    
                    key = { user.id}
                    name={ user.name }

                    checked = { user.checked }
                    
                    label={ user.label}
                    onChange={ () => props.onChange(user.id)}
                />
            })}

    </div>
}

export default Cuisine;