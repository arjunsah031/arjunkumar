import React, { useState } from "react";
import CssStyle from './SelectBoxInput.module.css';

import UP_ICON from './ImageIcon/upIcon.png';
import DOWN_ICON from './ImageIcon/downIcon.png';

import ListOfBanks from '../ListOfBanks/ListOfBanks';


const SelectBoxInput = props => {


    const [ showHideListBank, setShowHideListBank ] = useState( false );

    const showHideListBankHandler = () => {

        setShowHideListBank( s => !s );

    }

    const selectBankNameHandler = channelCode => {

        showHideListBankHandler();
        props.selectedBankNameHandler( channelCode );
    }
    

    return (

        <div className={ CssStyle.Con }>


            { showHideListBank && 
                
                <ListOfBanks 
                    listBanks={ props.listBanks }
                    statusListBank={ props.statusListBank }
                    gotErrorForFetchingBank={ props.gotErrorForFetchingBank }

                    selectedBankNameHandler={ selectBankNameHandler }
                /> 

            }


            <button className={ CssStyle.SelectBoxCon } onClick={ showHideListBankHandler }>

                <div className={ CssStyle.SelectBoxCon__Text }>{ props.selectedBankName }</div>

                <div className={ CssStyle.SelectBoxCon__Icon }>
                    <img src={ showHideListBank ? UP_ICON : DOWN_ICON } />
                </div>

            </button>


        </div>


    );

}

export default SelectBoxInput;



