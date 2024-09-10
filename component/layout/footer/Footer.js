
import Callus from "./Com/Callus/Callus";
import ChannelName from "./Com/ChannelName/ChannelName";
import Contactus from "./Com/Contactus/Contactus";
import Navigation from "./Com/Navigation/Navigation";
import Suscribe from "./Com/Suscribe/Suscribe";
import CssStyle from './Footer.module.css';

export default function Footer() {

    const data = new Date().getFullYear();
   
    return <footer className={ CssStyle.Con }>

        <div className={ [ CssStyle.Block, CssStyle.Carbon ].join(' ')} >    
        
            <div className={ CssStyle.LinCuss }>

                <div className={ CssStyle.SecondFoter }> 

                    <ChannelName/>
                    <Suscribe/>

                    <Contactus/>
                    <Callus/>


                 </div>

                 <div className={ CssStyle.lastFooterCon } >
                    <div > @{data}AducationalTeck All Right Reserved  </div>
                    <div> PRIVACY POLICY TERMS & CONDITIONS</div>
                 </div>

            </div>

        </div>
    
    </footer>
}
