import axios from "axios";
import { BASE_URL } from "../../_helpers/config";
import projectConstents from "../_constants/projectConstants";

const project_start = () => {
     return {
         type : projectConstents.PROJECT_START
     }
}

const project_list = () => {
    return async (dispatch) => {
         axios.get(`${BASE_URL}/api/v1/projects/all`).then((res)=>{
              dispatch({
                    type : projectConstents.PROJECT_SUCCESS,
                    payload : res.data
              })
         }).catch((err)=>{
              dispatch({
                   type : projectConstents.PROJECT_FAILED,
                   payload : err.message
              })
         });
    }
}

const project_detail_start = () => {
     return {
          type : projectConstents.PROJECT_START
     }
}

const project_detail_success = (id) => {
     return async (dispatch) => {
          axios.get(`${BASE_URL}/api/v1/projects/detail/${id}`).then((res)=>{
               const { ticket, project } = res.data;
               if( ticket || project){
                    dispatch({
                         type : projectConstents.PROJECT_DETAIL_SUCCESS,
                         payload : res.data
                   })
               }
               else{
                    dispatch({
                         type : projectConstents.PROJECT_FAILED,
                         payload : 'No Data Found',
                    })
               }
          }).catch((err)=>{
               dispatch({
                    type : projectConstents.PROJECT_FAILED,
                    payload : err.message
               })
          });
     }
}

const project_create_success = (data) => {
     return async (dispatch) => {
          axios.post(`${BASE_URL}/api/v1/projects/create`, data).then((res)=>{
               dispatch({
                    type : projectConstents.PROJECT_CREATE_SUCCESS,
                    payload : res.data
               })
          }).catch((err)=>{
               dispatch({
                    type : projectConstents.PROJECT_FAILED,
                    payload : err.message
               })
          });
     }
}

const projectActions = { project_start, project_list, project_detail_start, project_detail_success, project_create_success }

export default projectActions;