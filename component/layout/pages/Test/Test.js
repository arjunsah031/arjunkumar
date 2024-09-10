import React from "react";
import AdvanceFillter from "./Com/AdvanceFillter/AdvanceFillter";
import Animation from "./Com/Animation/Animation";
import ChartCircle from "./Com/ChartCircle/ChartCircle";
import Circule from "./Com/Circule/Circule";
import DropDown from "./Com/DropDown/DropDown";
import Ebqanimation from "./Com/Ebqanimation/Ebqanimation";
import Ebqanimation2 from "./Com/Ebqanimation2/Ebqanimation2";
import Ebqanimation4 from "./Com/Ebqanimation4/Ebqanimation4";
import Ebqsquare3 from "./Com/Ebqsquare3/Ebqsquare3";
import Foodselction from "./Com/Foodselction/Foodselction";
// import FormWork from "./Com/FormWork/FormWork";
import LodingAnimation from "./Com/LodingAnimation/LodingAnimation";
import Practice from "./Com/Practice/Practice";

import VerticalSqure from "./Com/VerticalSqure/VerticalSqure";
import CssStyle from './Test.module.css';
import Display from "./Com/Display/Display";

const Test = () => {

   

    return  <main className={ CssStyle.Con }>

                <AdvanceFillter/>
                <Foodselction/>
                <LodingAnimation/>

                 <Ebqanimation4/>

                <Ebqsquare3/>

                <Ebqanimation2/>

                <Ebqanimation/> 

                

                <Practice/>

                {/* <FormWork/> */}

                <ChartCircle/>

                <Animation/>
                <Display/>

                <VerticalSqure/>

                <Circule/>

                <DropDown/>          
       
    </main>
}

export default Test;
