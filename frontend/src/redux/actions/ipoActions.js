import Axios from "axios";
import urls from "../../urls";
import { IPO_ADD_FAIL, IPO_ADD_REQUEST, IPO_ADD_SUCCESS, IPO_DELETE_FAIL, IPO_DELETE_REQUEST, IPO_DELETE_SUCCESS, IPO_EDIT_FAIL, IPO_EDIT_REQUEST, IPO_EDIT_SUCCESS, IPO_LIST_FAIL, IPO_LIST_REQUEST, IPO_LIST_SUCCESS } from "../constants/ipoConstants";


export const listIPOs = () => async (dispatch, getState) => {
    dispatch({ type: IPO_LIST_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.get(`${urls.endpoint}/company-service/ipo`,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: IPO_LIST_SUCCESS, payload: data });
      localStorage.setItem('ipos',JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: IPO_LIST_FAIL, payload: message });
    }
  };

  export const addIpo = (ipo) => async (dispatch, getState) => {
    dispatch({ type: IPO_ADD_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.post(`${urls.endpoint}/company-service/ipos`,ipo,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: IPO_ADD_SUCCESS, payload: data });
      dispatch(listIPOs());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: IPO_ADD_FAIL, payload: message });
    }
  };

  export const editIpo = (ipo) => async (dispatch, getState) => {
    dispatch({ type: IPO_EDIT_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.put(`${urls.endpoint}/company-service/ipos`,ipo,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: IPO_EDIT_SUCCESS, payload: data });
      dispatch(listIPOs());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: IPO_EDIT_FAIL, payload: message });
    }
  };

  export const deleteIpo = (ipoId) => async (dispatch, getState) => {
    dispatch({ type: IPO_DELETE_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
       await Axios.delete(`${urls.endpoint}/company-service/ipos/${ipoId}`,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: IPO_DELETE_SUCCESS, payload: 'Company Deleted' });
      dispatch(listIPOs());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: IPO_DELETE_FAIL, payload: message });
    }
  };