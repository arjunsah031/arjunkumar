import React from 'react';
import CssStyle from './ListItemBank.module.css';


const ListItemBank = props => {


    return (

        <div className={ CssStyle.Con } >

            <button className={ CssStyle.Btn } onClick={ () => props.onClick( props.channelCode ) }>

                <div className={ CssStyle.ImageCon }>
                    <img src={ props.iconLink } />
                </div>

                <div className={ CssStyle.BankNameCon }>
                    <span>{ props.bankName }</span>
                </div>

            </button>

        </div>

    );
}

export default ListItemBank;


