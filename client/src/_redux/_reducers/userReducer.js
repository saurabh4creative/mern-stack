import userConstents from "../_constants/userConstants";

const userInfo  = JSON.parse(localStorage.getItem('User'));
const userToken = localStorage.getItem('Token');

const initialState = {
     isLoading : false,
     isError : false,
     isLogin : userToken ? true : false,
     isMessage : false,
     user : userInfo ? userInfo : {},
     token : userToken ? userToken : {},
     status : false
}

const userReducer = (state = initialState, action) => {
    switch( action.type ){
         case userConstents.LOGIN_START :
            return {
                 ...state,
                 isLoading : true,
                 isError : false,
                 isLogin : false,
                 user : {},
                 status : false,
            }
         case userConstents.LOGIN_SUCCESS :
            return {
                ...state,
                isLoading : false, 
                isMessage : action.payload,
                isLogin : true,
                status : true,
            } 
         case userConstents.LOGIN_FAILED :
            return {
                ...state,
                isLoading : false, 
                isMessage : action.payload,
                isLogin : false,
                status : false
            }        
         default : return state;   
    }
}

export default userReducer;