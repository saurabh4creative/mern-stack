import projectConstents from "../_constants/projectConstants";

const initialState = {
    isLoading : false,
    isError : false,
    isMessage : false,
    isSatus : false,
    projects : {},
    projectDetail : {},
    tickets : {},
};

const projectReducer = ( state = initialState, action ) => {
    switch( action.type ){
         case projectConstents.PROJECT_START : 
             return {
                 ...state,
                 isLoading : true,
                 isMessage : false,
                 isSatus   : false,
                 projects  : {},
                 projectDetail : {},
                 tickets : {},
             }
         case projectConstents.PROJECT_SUCCESS : 
             return {
                 ...state,
                 isLoading : false,
                 isMessage : action.payload.message,
                 isSatus   : action.payload.status,
                 projects  : action.payload.projects,
                 projectDetail : {},
                 tickets : {},
             }    
         case projectConstents.PROJECT_FAILED :
             return {
                 ...state,
                 isLoading : false,
                 isMessage : action.payload,
                 isSatus   : false,
                 isError   : true,
                 projects  : {}, 
                 projectDetail : {},
                 tickets : {},
             }   
         case projectConstents.PROJECT_DETAIL_SUCCESS :
             return {
                 ...state,
                 isLoading : false,
                 isMessage : action.payload.message,
                 isSatus   : action.payload.status,
                 projects  : {},
                 projectDetail : action.payload.project,
                 tickets : action.payload.tickets,
             } 
         case projectConstents.PROJECT_CREATE_SUCCESS :
             return {
                 ...state,
                 isLoading : false,
                 isMessage : action.payload.message,
                 isSatus   : action.payload.status,
                 projects  : {},
                 projectDetail : {},
                 tickets : {},
             }          
         default : return state;    
    }
}

export default projectReducer