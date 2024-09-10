import React from 'react';
import CssStyle from './TopFixedLayer.module.css';

import ReactDOM from 'react-dom';


const TopFixedLayer = props => {


    const rootLavelElement = (

        <div className={ CssStyle.Con }>

            { props.children }

        </div>

    );


    return ReactDOM.createPortal( rootLavelElement, document.getElementById( 'paymentGatewayfixedcomponent' ) );

}

export default TopFixedLayer;




