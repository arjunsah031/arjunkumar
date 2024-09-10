import React from "react";
import reactDom from "react-dom";
import CssStyle from './MyModel.module.css';

const MyModel = props => {

    const contaidata =  <React.Fragment>

    <div  className={ CssStyle.Layer } ></div>

    <div className={ `${CssStyle.Con} ${props.className}}` } style={ props.style ? props.style : {}} > 

        <div className={ CssStyle.desFormTypeCon } >

           <div className={ CssStyle.desTiittle } > { props.tittle} </div>
          <button onClick={ props.onClick } className={ CssStyle.closeBtn } >  { props.closeBtn} </button>
          
            
        </div>
            
        <div className={ CssStyle.Children}> {props.children } </div>


    </div>

    

</React.Fragment>

return contaidata;



   
}

export default MyModel;