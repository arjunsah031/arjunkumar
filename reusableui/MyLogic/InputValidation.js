

const countAtTheRateChar = EMAIL => {

    let count = 0;

    for( let i = 0; i < EMAIL.length; i++ ) {

        if( '@' === EMAIL.charAt( i ) ) {

            count = count + 1;

        }
    }

    return count;

}


// VALID_EMAIL_ADDRESS
export const validateEmailAddress = enteredEmail => {


    let emailValidationStatus = 'NOT_VALID_EMAIL_ADDRESS';
    const sanitizeEmail = enteredEmail.split(" ").join( '' );

    if( countAtTheRateChar( sanitizeEmail ) !== 1 ) {

        return emailValidationStatus;
    }

    const emailTotalLength = sanitizeEmail.length;


    for( let i = 0; i < emailTotalLength; i++ ) {

        if( 

            ( '@' === sanitizeEmail.charAt( i ) ) &&

            ( i > 0 ) && 

            ( sanitizeEmail.charAt( i + 1 ) !== '.' ) && 

            ( sanitizeEmail.charAt( emailTotalLength - 1 ) !== '.' )

        ) {

            const loopingCount = i + 1;
            
            for( let j = loopingCount; j < emailTotalLength; j++ ) {

                if( '.' === sanitizeEmail.charAt( j ) ) {

                    return 'VALID_EMAIL_ADDRESS';

                }

            }

            return emailValidationStatus;

        }

    }

    return emailValidationStatus;

}


export const sanitizeEmail = em => {
    
    const getEmailToLowerCase = em.toLowerCase();
        
    return getEmailToLowerCase.split(" ").join("");

};
   


// VALID_NAME
export const firstORLastNameValidation = name => { 
    
    const pattern = /^[a-zA-Z0-9]+$/;
    
    if( pattern.test( name )) {
        
        return 'VALID_NAME'; 
        
    }
    
    return 'NOT_VALID_NAME';
    
};


export const sanitizeFirstORLastName = NAME => { 
    
    const transformToLowerString = NAME.toLowerCase();
    
    const getFirstWordCaptailLetter = transformToLowerString.charAt(0).toUpperCase();
    
    const skipFirstLetterFromString = transformToLowerString.slice(1);
    
    return getFirstWordCaptailLetter  +skipFirstLetterFromString;
    
};



// VALID_NAME
export const fullNameValidation = name => {  
    
    const pattern = /^[a-zA-Z0-9 ]+$/;
    
    if( pattern.test( name )) {
        
        return 'VALID_NAME'; 
        
    }
    
    return 'NOT_VALID_NAME';
    
};

export const sanitizeFullName = NAME => { 

    const trimString = NAME.trim();
    
    const getFirstWordCaptailLetter = trimString.charAt(0).toUpperCase();
    
    const skipFirstLetterFromString = trimString.slice(1);
    
    return getFirstWordCaptailLetter  +skipFirstLetterFromString;

};


// VALID_DIGITS
export const onlyDigiyAllowValidation = entDigits => {
    
    const pattern = /^[0-9]+$/;
    
    if( pattern.test( entDigits ) ) {
        
        return 'VALID_DIGITS';

    }
    
    return 'NOT_VALID_DIGITS';
    
};


// VALID_LOGIN_ID
export const loginIdValidation = loginID => {
    
    const pattern = /^[a-zA-Z0-9]+$/;
    
    if( pattern.test( loginID )) {
        
        return 'VALID_LOGIN_ID'; 
        
    }
    
    return 'NOT_VALID_LOGIN_ID';
    
};




