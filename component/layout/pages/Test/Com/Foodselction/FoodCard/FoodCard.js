import React from "react";
import CssStyle from './FoodCard.module.css';


const FoodCard = props  => {

    return <div className={ CssStyle.CardRaping}>
        <div className={ CssStyle.Con }>

            <div> { props.Name } </div>
            <img src={ props.image } alt='apple'/>
            <div> { props.Type } </div>

        </div>
    </div>
}

export default FoodCard;