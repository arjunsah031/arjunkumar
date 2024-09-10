import React from "react";
import CssStyle from './ListOfBanks.module.css';

import ListItemBank from './ListItemBank/ListItemBank';


const ListOfBanks = props => {

    const statusListBank = props.statusListBank;


    let contentData = null;


    if( statusListBank === 'FETCHING_BANK_LIST' ) {

        contentData = <div className={ CssStyle.FetchingBanks }>Fetching bank list...</div>

    } else if ( statusListBank === 'ERROR' ) {


        contentData = <div className={ CssStyle.FetchingBanks } style={{ color: '#ff0000' }}>{ props.gotErrorForFetchingBank }</div>


    } else if ( statusListBank === 'FETCHED_LIST' ) {


        contentData = props.listBanks.map( bItem => {

            return <ListItemBank 

                key={ bItem.channelCode }

                iconLink={ bItem.iconUrl }
                bankName={ bItem.channelName }
                channelCode={ bItem.channelCode }
                onClick={ props.selectedBankNameHandler }
    
    
            />
            
        });

    }


    return (

        <div className={ CssStyle.Con }>
            
            { contentData }

        </div>
    );


}

export default ListOfBanks;


