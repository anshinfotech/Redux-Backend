// userReducer.js
import {
  FETCH_USER_INFO_FAIL,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  USER_CREATE_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
} from "../Action/userActions";

const initialUserState = {
  users: [],
  success: "",
  loading: "",
  error: "",
};

export const userReducer = (state = initialUserState, action) => {
  switch (
    action.type // Fix: use action.type
  ) {
    case FETCH_USER_INFO_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        users: action.payload.allusers, // Fix: no need for state.users
      };
    case FETCH_USER_INFO_FAIL:
      return { ...state, error: action.payload.message };

    case USER_CREATE_REQUEST:
      return { ...state, loading: true };
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.data,
        success: action.payload.message,
      };
    case USER_CREATE_FAIL:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};
