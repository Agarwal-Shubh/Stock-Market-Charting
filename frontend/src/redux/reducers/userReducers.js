import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_VERIFY_FAIL, USER_VERIFY_REQUEST, USER_VERIFY_RESET, USER_VERIFY_SUCCESS } from "../constants/userConstants";


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      case USER_REGISTER_RESET:
        return {};
      default:
        return state;
    }
  };

  export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };

  export const userVerifyReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_VERIFY_REQUEST:
        return { loading: true };
      case USER_VERIFY_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_VERIFY_FAIL:
        return { loading: false, error: action.payload };
      case USER_VERIFY_RESET:
        return {};
      default:
        return state;
    }
  };