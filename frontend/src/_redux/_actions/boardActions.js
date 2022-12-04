import boardConstents from "../_constants/boardConstents";
import axios from "axios";
import { BASE_URL } from "../../_helpers/config";

const board_start = () => {
    return  {
        type: boardConstents.BOARD_START
    }
}
const board_success = (id) => {
    return async (dispatch) => {
        axios.get(`${BASE_URL}/api/v1/users/karbon/${id}`).then((res) => {
              dispatch({
                   type : boardConstents.BOARD_SUCCESS,
                   payload : res.data
              })
        }).catch((err)=>{
              dispatch({
                   type : boardConstents.BOARD_ERROR,
                   payload : err.message
              })
        })
    }
}

const boardActions = { board_start, board_success }

export default boardActions;