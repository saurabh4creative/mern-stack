import userConstents from "../_constants/userConstants"

const initialState = {
     isLoading : false,
     isError : false,
     isMessage : false,
     isEmpty : false,
     status  : false
}

const registerReducer = (state = initialState, action) => { 
     switch(action.type){
          
          case userConstents.REGISTER_START :
               
              return {
                   ...state,
                   isLoading : true,
                   isError : false,
                   isMessage : false,
                   isEmpty : false,
                   status  : false
              }

          case userConstents.REGISTER_SUCCESS :

              return {
                   ...state,
                   isLoading : false,
                   isError : false,
                   isMessage : action.payload,
                   isEmpty : false,
                   status  : true
              }
          
          case userConstents.REGISTER_FAILED :

                return {
                     ...state,
                     isLoading : false,
                     isError : false,
                     isMessage : action.payload,
                     isEmpty : true,
                     status  : false
                } 
          
          case userConstents.REGISTER_ERROR :

                return {
                        ...state,
                        isLoading : false,
                        isError : true,
                        isMessage : action.payload,
                        isEmpty : false,
                        status  : false
                }    
          
          case userConstents.USER_ACTIVATE : 
                
                return {
                    ...state,
                    isLoading : false,
                    isMessage : action.payload.message,
                    userData  : action.payload.user,
                    status : true
                }
          
          default : return state;    
     }
}

export default registerReducer