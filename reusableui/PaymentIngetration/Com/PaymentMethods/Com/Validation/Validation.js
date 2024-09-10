

export const onlyDigitAllow = entDigit => {
        
    const pattern = /^[0-9]+$/;
    
    if( pattern.test( entDigit ) ) {
        
        return 'VALID_DIGIT';

    }
    
    return 'NOT_VALID_DIGIT';
    
};


export const removeAllSpaces = myString => {

    return myString.replace( " ", "" );
}


export const removeAllHiFan = myString => {

    return myString.replace(/[-]/g,'' );

}


export const sixDigitOnlyGet  = sString => {

    const onlyDigits = removeAllHiFan( sString  );

    return onlyDigits.substring( 0, 6 );

}


export const removeAllSalesh = myString => {

    return myString.replace(/[/]/g,'' );

}

