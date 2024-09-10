import React from 'react';

import CssStyle from './GoBackBtn.module.css';

const GoBackBtn = props => {

    return (

        <div className={ CssStyle.Con }>

            <button 
                className={ CssStyle.GoBackBtn } 
                onClick={ props.goBackOnClick }>{ "< Go back" }</button>
            
        </div>
    );

}

export default GoBackBtn;


