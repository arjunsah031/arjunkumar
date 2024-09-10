
import React from 'react';
import CssStyle from './Row.module.css';

const Row = props => {

    const width = props.width;
    const borderWidth = '10';
    const ColumnWidth = props.ColumnWidth

    console.log( width + (width * 0.4))

    
  
    const CirculeStyle = {
        
        width : width + 'px',
        height : (width + (width * 0.0)) + 'px',
        borderRadius: '0% 100% 100% 0% / 0% 100% 100% 0%',

        position: 'relative',
        borderTop: ` ${ borderWidth}px solid white `,
        borderRight: ` ${ borderWidth}px solid white `,
        borderBottom: ` ${ borderWidth}px solid white `,   

    }

    const CollumStyle = {

        width: (ColumnWidth) + 'px',
        height: (300) + 'px',
        bottom: -borderWidth + 'px',
        left: -(( ColumnWidth)) + 'px',
        clipPath: `polygon( 0 0, 10px 0, 10px 290px, ${ColumnWidth}px 290px, ${ColumnWidth}px 300px, 0 300px, 0 0)`

    }

    return <div className={ `${CssStyle.Con} ${props.className}` } >

        <div className={ CssStyle.CIrcle} style={CirculeStyle } > 

            <div className={ CssStyle.Collum } style={ CollumStyle}></div>
        
        </div>

    </div> 
}

export default Row;