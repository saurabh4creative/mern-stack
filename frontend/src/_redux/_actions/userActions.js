import userConstents from "../_constants/userConstants";
import axios from "axios";
import { BASE_URL } from "../../_helpers/config";

const register_start = () => {
    return {
        type : userConstents.REGISTER_START
    }
}

const register_success = (user) => {
    return async (dispatch) => {
          try{
                await axios.post(`${BASE_URL}/api/v1/users/register`, user).then((res)=>{ 
                        if( res.data.status ){
                            dispatch({
                                type : userConstents.REGISTER_SUCCESS,
                                payload : res.data.message
                            })
                        }
                        else{
                            dispatch({
                                type : userConstents.REGISTER_FAILED,
                                payload : res.data.message
                            })
                        }
                }).catch((err) => { 
                        dispatch({
                            type : userConstents.REGISTER_ERROR,
                            payload : err.message
                        })
                })
          } catch(err){
                dispatch({
                    type : userConstents.REGISTER_ERROR,
                    payload : err.message
                })
          }
    }
}

const register_failed = () => {
    
}

const register_error = () => {
    
}

const user_activate = (token) => {
    return async(dispatch) => {
         await axios.post(`${BASE_URL}/api/v1/users/activate`, {token}).then((res)=>{
                if( res.data.status ){
                    dispatch({
                        type : userConstents.USER_ACTIVATE,
                        payload : res.data
                    })
                }
                else{
                    dispatch({
                        type : userConstents.REGISTER_FAILED,
                        payload : res.data.message
                    })
                }
         }).catch((err) =>{
                dispatch({
                    type : userConstents.REGISTER_ERROR,
                    payload : err.message
                })
         })
    }
}

const login_start = () => {
    return {
        type : userConstents.LOGIN_START
    }
}

const login_success = (data) => {
    return async(dispatch) => {
        await axios.post(`${BASE_URL}/api/v1/users/login`, data).then((res)=>{
               if( res.data.status ){
                   const { user, token } = res.data;
                   localStorage.setItem('User', JSON.stringify(user));
                   localStorage.setItem('Token', token);
                   dispatch({
                       type : userConstents.LOGIN_SUCCESS,
                       payload : res.data.message
                   })
               }
               else{
                   dispatch({
                       type : userConstents.LOGIN_FAILED,
                       payload : res.data.message
                   })
               }
        }).catch((err) =>{
               dispatch({
                   type : userConstents.LOGIN_ERROR,
                   payload : err.message
               })
        })
   }
}

const userActions = {
    register_start, register_success, register_failed, register_error, user_activate, login_start, login_success
};

export default userActions;