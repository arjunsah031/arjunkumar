import React, { useState } from 'react'
import CssStyle from './ProgressSliner.module.css';

import Slider from '@mui/material/Slider';



 const ProgressSliner = props => {

  

  return <div className={ CssStyle.Con }>
    <Slider
        
        value={props.priceValue}
        onChange={ props.onChange }
        valueLabelDisplay="auto"
        min={ 200 }
        max={600}
       
      />
  </div>
}

export default ProgressSliner;
