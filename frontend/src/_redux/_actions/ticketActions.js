import axios from "axios";
import ticketConstants from "../_constants/ticketConstants";
import { BASE_URL } from "../../_helpers/config";

const ticket_fetch = () => {
    return {
         type : ticketConstants.TICKET_FETCH
    }
}

const ticket_success = () => {
    return async (dispatch) => {
         axios.get(`${BASE_URL}/api/v1/tickets/all`).then((res) => {
               dispatch({
                    type : ticketConstants.TICKET_SUCCESS,
                    payload : res.data
               })
         }).catch((err)=>{
               dispatch({
                    type : ticketConstants.TICKET_FAILED,
                    payload : err.message
               })
         })
    }
}

const works_tickets = () => {
     return async (dispatch) => {
          axios.get(`${BASE_URL}/api/v1/tickets/my-ticket`).then((res) => {
                dispatch({
                     type : ticketConstants.MY_TICKETS,
                     payload : res.data
                })
          }).catch((err)=>{
                dispatch({
                     type : ticketConstants.TICKET_FAILED,
                     payload : err.message
                })
          })
     }
}

const ticket_detail = (id) => {
     return async (dispatch) => {
          axios.get(`${BASE_URL}/api/v1/tickets/ticket/${id}`).then((res) => {
                if( res.data.status ){
                    dispatch({
                         type : ticketConstants.TICKET_DETAIL,
                         payload : res.data
                    })
                }
                else{
                    dispatch({
                         type : ticketConstants.TICKET_FAILED,
                         payload : res.data.message
                    })
                }
          }).catch((err)=>{
                dispatch({
                     type : ticketConstants.TICKET_FAILED,
                     payload : err.message
                })
          })
     }
}

const get_details = () => {
     return async (dispatch) => {
          axios.get(`${BASE_URL}/api/v1/users/get_lists`).then((res) => {
                if( res.data.status ){
                    dispatch({
                         type : ticketConstants.GET_DETAILS,
                         payload : res.data
                    })
                }
                else{
                    dispatch({
                         type : ticketConstants.TICKET_FAILED,
                         payload : res.data.message
                    })
                }
          }).catch((err)=>{
                dispatch({
                     type : ticketConstants.TICKET_FAILED,
                     payload : err.message
                })
          })
     }
}

const ticketActions = { ticket_fetch, ticket_success, works_tickets, ticket_detail, get_details }

export default ticketActions