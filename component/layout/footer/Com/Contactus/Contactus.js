import React from 'react';
import SosalMedia from '@/reusableui/SosalMedia/SosalMedia';
import CssStyle from './Contactus.module.css';

const Contactus = () => {

    return <div className={ CssStyle.Con } >

        <div> CONTACT US </div>

        <SosalMedia

            className = { CssStyle.Social}
            color = 'white'
            size = '30px'
        />

    </div>
}

export default Contactus;