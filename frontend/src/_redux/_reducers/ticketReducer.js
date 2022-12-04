import ticketConstants from "../_constants/ticketConstants";

const initialState = {
     isLoading : false,
     isError   : false,
     isMessage : false,
     isStatus  : false,
     tickets   : {},
     assignTickets : {},
     reportarTickets : {},  
     ticketDetail : {}
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
                 isError   : true,
                 isMessage : action.payload,
                 isStatus  : false,
                 tickets   : {}  
            }   
          case ticketConstants.MY_TICKETS :
            return {
                ...state,
                isLoading : false,
                isError   : false,
                isMessage : action.payload.message,
                isStatus  : false,
                assignTickets : action.payload.ticketAssign,
                reportarTickets : action.payload.ticketReportar,   
            }     
          case ticketConstants.TICKET_DETAIL :  
            return {
               ...state,
               isLoading : false,
               isError   : false,
               isMessage : action.payload.message,
               isStatus  : action.payload.status,  
               ticketDetail : action.payload.ticket 
           } 
          case ticketConstants.GET_DETAILS :  
            return {
               ...state,
               isLoading : false,
               isError   : false,
               isMessage : action.payload.message,
               isStatus  : action.payload.status,  
               ticketDetail : state.ticketDetail,
               get_projects : action.payload.projects,
               get_users : action.payload.users
           }    
          default : return state;
     }
}

export default ticketReducer