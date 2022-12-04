import boardConstents from "../_constants/boardConstents"

const initialState = {
     isLoading : false,
     isError : false,
     isMessage : false,
     boardDetail : {
          tickets : {},
          isUser : {},
          listUser : {}
     } 
}

const boardReducer = (state = initialState, action) => {
     switch(action.type){
          case boardConstents.BOARD_START : 
             return {
                  ...state,
                  isLoading : true,
                  isError : false,
                  isMessage : false,
                  boardDetail : {
                    tickets : {},
                    isUser : {},
                    listUser : {}
                  } 
             }
          case boardConstents.BOARD_SUCCESS : 
             return {
                  ...state,
                  isLoading : false,
                  isError : false,
                  isMessage : action.payload.message,
                  boardDetail : action.payload.data
             }
          default : return state;      
     }
}

export default boardReducer