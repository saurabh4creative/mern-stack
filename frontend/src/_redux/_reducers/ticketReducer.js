import ticketConstants from "../_constants/ticketConstants";

const initialState = {
     isLoading : false,
     isError   : false,
     isMessage : false,
     isStatus  : false,
     tickets   : {}  
};

const ticketReducer = (state = initialState, action) => {
     switch( action.type ){
          case ticketConstants.TICKET_FETCH :
            return {
                 ...state,
                 isLoading : true,
                 isError   : false,
                 isMessage : false,
                 isStatus  : false,
                 tickets   : {}  
            }
          case ticketConstants.TICKET_SUCCESS :
            return {
                 ...state,
                 isLoading : false,
                 isError   : false,
                 isMessage : action.payload.messgae,
                 isStatus  : action.payload.status,
                 tickets   : action.payload.tickets  
            }
          case ticketConstants.TICKET_FAILED :
            return {
                 ...state,
                 isLoading : false,
                 isError   : false,
                 isMessage : action.payload,
                 isStatus  : false,
                 tickets   : {}  
            }   
          default : return state;
     }
}

export default ticketReducer