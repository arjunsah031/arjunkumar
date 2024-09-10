import React from "react";
import CssStyle from './Googlemap.module.css';

const Googlemap = props => {

    return <div className={ CssStyle.Con}>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.0616990037958!2d77.36925912387227!3d28.56179661828116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f25ac323b5%3A0xd496afa2bb8dd672!2sSector%2049%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1697633012107!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
       
        // style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
            

    </iframe>
    </div>
}

export default Googlemap;

