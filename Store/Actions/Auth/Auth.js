export const LOGIN__SUCCESS = 'LOGIN__SUCCESShhguy';
export const loginSucessAction = token => {

    return {

        type : LOGIN__SUCCESS,
        loginToken : token
    }

}

export const LOGOUTME = 'LOGOUTMEii';
export const logoutMeAction = () => {
    
    return {

        type : LOGOUTME
    }
}

export const ISVALID__TOKEN = 'ISVALID__TOKENtgugi';
export const isvalidTokenAction = valu => {

    return {

        type : ISVALID__TOKEN,
        value : valu
    }
}