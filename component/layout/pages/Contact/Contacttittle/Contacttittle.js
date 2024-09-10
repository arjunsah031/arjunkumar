import React from "react";
import SosalMedia from "@/reusableui/SosalMedia/SosalMedia";
import CssStyle from './Contacttittle.module.css';

const Contacttittle = () => {

    return <div className={ CssStyle.Con }>

           <div className={ CssStyle.Container}>
                <h1> CONTACT_</h1>

                <div className={ CssStyle.Adress}>

                    <div>Sector 49 Noida Utarpradesh</div>

                    <div> 5th floor Gautam budh nagar  </div>

                </div> 

                <div className={ CssStyle.PhoneNunmer } >

                    <div>PHN: 7619517427 </div>
                    <div>PHN: 7619517427 </div>

                </div>

                <div className={ CssStyle.SosalMedia}>

                    <div> Gmail : saharjun031@gmail.com</div>
                    <div className={ CssStyle.media} > <SosalMedia

                        color = 'white'
                        size = '30px'
                    
                        /> </div>

                </div>

                <div className={ CssStyle.CopyRight } >

                    <div>© 2023 by Personal Life Coach. </div>
                    <div >Proudly created with Wix.com  </div>

                </div>
           </div>

    </div>
}

export default Contacttittle;