
import React, { useState }  from "react";
import CssStyle from './PDhandler.module.css';

import { useSelector } from "react-redux";
import LogoutHandler from "../LogoutHandler/LogoutHandler";


const PDhandler = props => {

    
    const[ isshowProfileD, setisshowProfile ] = useState(false);

    const BtnStyle = [ CssStyle.ProfileBtn];

    if( isshowProfileD ) {

        BtnStyle.push( CssStyle.ActiveBtn )

    }
    
    const showHideprofileHandler = () => {

        setisshowProfile( s => !s)
    }

    const closeHandler = () => {
        
        setisshowProfile(false)
    } 

    return <div className={ CssStyle.MainCon } >

                <div className={  CssStyle.Con } >

                    <button onClick={ showHideprofileHandler }  className={ BtnStyle.join(' ')}> hr </button>

                </div>

                { isshowProfileD &&  <React.Fragment> 

                        <div onClick={ closeHandler } className={ CssStyle.Layer }></div>

                        <div className={ CssStyle.LayerCon}>

                        <div> helo</div>
                           

                            <LogoutHandler/>
                            
                        </div> 

                    </React.Fragment>        
                    
                }

    </div>
}

export default PDhandler;