import { LOGIN_SIGN_CONST } from "../../../Component/MyCustumConstat/MyCustumConstat";
import { ISVALID__TOKEN, LOGIN__SUCCESS, LOGOUTME } from "../../Actions/Auth/Auth";

const initialState = {

    loginAccessToken : localStorage.hasOwnProperty('loginAcessToken') ? localStorage.getItem('loginAcessToken'):false,

    isValidToken : LOGIN_SIGN_CONST.cheakingToken //SESSION TIME OUT // VALID SESSION //

}

const AuthReducer = ( state = initialState, action ) => {

    if( action.type === LOGIN__SUCCESS ) {

        localStorage.setItem('loginAcessToken', action.loginToken );

        return{ ...state}
        
    }
    else if( action.type === LOGOUTME ) {
        
        localStorage.clear();

        return { ...state } 

    }
    else if( action.type === ISVALID__TOKEN ) {

        return {
            ...state,
            isValidToken : action.value
            
        }
    } 
    else {

        return state;
    } 

}

export default AuthReducer;