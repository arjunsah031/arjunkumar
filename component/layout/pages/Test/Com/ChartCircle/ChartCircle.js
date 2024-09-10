import React from 'react';

import CssStyle from './ChartCircle.module.css';

const ChartCircle = props => {

    const completed = 1.8 * 10;

    const d = {

        animation: 'fill ease-in-out 1s',

        transform: "rotate("+ completed +"deg)"
    }
  

    return (

        <div className={ CssStyle.ConContainer }>
            {/* Start ChartCircle */}
            <div className={ CssStyle.CircleWrap }>

                <div className={ CssStyle.circle }>
                    
                    <div className={ [ CssStyle.mask , CssStyle.full ].join(' ' )}  style={ d }>
                        <div className={ CssStyle.fill }  style={ d }> </div>
                    </div>
                
                    <div className={ [ CssStyle.mask , CssStyle.half ].join(' ' )} >
                        <div className={ CssStyle.fill } style={ d }></div>
                    </div>
                    
                    {/* <div className={ CssStyle.insideCircle } >
                        { props.left } hel
                    </div> */}
                    
                </div>

            </div>
            {/* End ChartCircle */}

            {/* <div className={ CssStyle.Circles }>

                <div> giug</div>

            </div> */}

        </div>

    );

}

export default ChartCircle;




