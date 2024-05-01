// userActions.js
import axios from "axios";

export const FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FETCH_USER_INFO_FAIL = "FETCH_USER_INFO_FAIL";

export const userFetch = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_INFO_REQUEST });
  try {
    const userdata = await axios.get("http://localhost:8000/allusers");
    dispatch({ type: FETCH_USER_INFO_SUCCESS, payload: userdata.data });
  } catch (error) {
    dispatch({ type: FETCH_USER_INFO_FAIL, payload: error.message }); // Fix: Dispatch a serializable error message
  }
};

export const USER_CREATE_REQUEST="USER_CREATE_REQUEST"
export const USER_CREATE_SUCCESS="USER_CREATE_SUCCESS"
export const USER_CREATE_FAIL="USER_CREATE_FAIL"


export const userCreate = (user)=>async(dispatch)=>{
  dispatch({type:USER_CREATE_REQUEST})
  try {
    const data = await (await axios.post("http://localhost:8000/submitdata",user)).data;
    dispatch({type:USER_CREATE_SUCCESS, payload:data})
  } catch (error) {
    dispatch({ type: USER_CREATE_FAIL, payload: error.message });
  }
}
