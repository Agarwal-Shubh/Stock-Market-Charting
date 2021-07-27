import Axios from 'axios';
import urls from '../../urls';
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_VERIFY_FAIL, USER_VERIFY_REQUEST, USER_VERIFY_SUCCESS } from '../constants/userConstants';



export const signin = (username, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
    try {
     const {data} = await Axios.post(`${urls.endpoint}/auth/login`, { 
        username:username,
        password:password, });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const register = (username, email, password,mobile) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email } });
    try {
      const { data } = await Axios.post(`${urls.endpoint}/auth/signup`, {
        username:username,
         password:password,
         email:email ,
         mobile:mobile
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const verifyEmail = (token) => async (dispatch) => {
    dispatch({ type: USER_VERIFY_REQUEST });
    try {
        await Axios.get(`${urls.endpoint}/auth/confirm?token=${token}`);
      
      dispatch({ type: USER_VERIFY_SUCCESS, payload:'User Activation Success!' });
    } catch (error) {
      dispatch({
        type: USER_VERIFY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  
  export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_SIGNOUT });
    document.location.href = '/login';
  };