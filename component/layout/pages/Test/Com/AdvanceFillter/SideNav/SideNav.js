import React from "react";
import Catagories from "./Catagories/Catagories";
import Cuisine from "./Cuisine/Cuisine";
import ProgressSliner from "./ProgressSliner/ProgressSliner";
import CssStyle from './SideNav.module.css';
import StartRating from "./StartRating/StartRating";

const SideNav = props => {

    
    return <div className={ CssStyle.Con }>

        <div className={ CssStyle.firstPart}>
            <ProgressSliner 
                priceValue={ props.priceValue}
                onChange={ props.onChange }
            />
        </div>

        <div className={ CssStyle.secondpart}>

            <Catagories 

                onclickplace={ props.onclickplace}
                onclickdish={ props.onclickdish}
            />

            <Cuisine 

                checkboxdata = {props.checkboxdata }

                onChange = { props.CuisineonChange } 

            />


            <StartRating

                fistStar={ props.fistStar}
                secondStar={ props.secondStar }
                thirdStar={ props.thirdStar}
                fourthStar={ props.fourthStar}
                fifthStar={ props.fifthStar }

            />

        </div>
        
        
        

    </div>
}

export default SideNav;