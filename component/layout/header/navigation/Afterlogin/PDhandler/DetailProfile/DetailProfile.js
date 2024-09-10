import React from "react";
import CssStyle from './DetailProfile.module.css';


const DetailProfile = props  => {

    return <React.Fragment>
        
                <div className={ CssStyle.Con }>
                    <div className={ CssStyle.profileCon } > 

                        <div className={ CssStyle.profileFirst } > Name:  </div>
                        <div>  {props.Name } </div>

                        </div>

                        <div className={ CssStyle.profileCon } > 

                        <div className={ CssStyle.profileFirst } > Email: </div>
                        <div> {props.Email} </div>

                        </div>

                        <div className={CssStyle.profileCon } > 

                        <div className={ CssStyle.profileFirst }> AC time: </div>
                        <div>  { props.Time } </div>

                        </div>

                        <div className={ CssStyle.profileCon } > 

                        <div className={ CssStyle.profileFirst }> Total notes:  </div>
                        <div>  { props.TotalNotes} </div>

                    </div>
                </div>

    </React.Fragment>
}

export default DetailProfile;