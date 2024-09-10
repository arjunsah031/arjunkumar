import React from 'react';
import CssStyle from './StartRating.module.css';

const StartRating = props => {

    return <div className={ CssStyle.Con } >

        <div className={ CssStyle.Ratingtittle } >RATING </div>

        <div className={ CssStyle.RatingCon } >

            <button onClick={ () =>props.fistStar('1')}>1</button>
            <button onClick={ () =>props.secondStar('2')}>2</button>
            <button onClick={ () =>props.thirdStar('3')}>3</button>
            <button onClick={ () =>props.fourthStar('4')}>4</button>
            <button onClick={ () =>props.fifthStar('5')}>5</button>

        </div>
    </div>
}

export default StartRating;
