import userConstents from "../_constants/userConstants";

const initialState = {
     isLoading : false,
     isError : false,
     isStatus : false,
     isMessage : false,
     userData : {}
}

const dashboardReducer = (state = initialState, action) => {
     switch( action.type ){
          case userConstents.DASHBOARD_START :
            return {
                ...state,
                isLoading : true,
                userData : {}
            }
          case userConstents.DASHBOARD_SUCCESS :
            return {
                ...state,
                isLoading : false,
                userData  : action.payload 
            }  
          default : return state;  
     }
}

export default dashboardReducer;