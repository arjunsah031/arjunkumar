import React from "react";
import CssStyle from './ListIteam.module.css';
import Image from "next/image";

const ListIteam = props => {

   
    return <div className={ CssStyle.CardRap }>

        
        <div className={ CssStyle.Con }> 

            <div className={ CssStyle.imgCon}> 
                <Image src="/place.jpg" width={100} height={100} alt='hel' />
            </div>

            <div className={ CssStyle.DesCon }>

                <div> { props.tittle}  </div>
                <div> { props.star }  </div>
 
            </div>

        </div>
        

    </div>
}

export default ListIteam;