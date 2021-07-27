import Axios from "axios";
import urls from "../../urls";
import { EXCHANGE_ADD_FAIL, EXCHANGE_ADD_REQUEST, EXCHANGE_ADD_SUCCESS, EXCHANGE_DELETE_FAIL, EXCHANGE_DELETE_REQUEST, EXCHANGE_DELETE_SUCCESS, EXCHANGE_EDIT_FAIL, EXCHANGE_EDIT_REQUEST, EXCHANGE_EDIT_SUCCESS, EXCHANGE_LIST_FAIL, EXCHANGE_LIST_REQUEST, EXCHANGE_LIST_SUCCESS } from "../constants/exchangeConstants";


export const listExchanges = () => async (dispatch, getState) => {
    dispatch({ type: EXCHANGE_LIST_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.get(`${urls.endpoint}/exchange-service/exchanges`,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: EXCHANGE_LIST_SUCCESS, payload: data });
      localStorage.setItem('exchanges',JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EXCHANGE_LIST_FAIL, payload: message });
    }
  };

  export const addExchange = (exchange) => async (dispatch, getState) => {
    dispatch({ type: EXCHANGE_ADD_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.post(`${urls.endpoint}/exchange-service/exchanges`,exchange,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: EXCHANGE_ADD_SUCCESS, payload: data });
      dispatch(listExchanges());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EXCHANGE_ADD_FAIL, payload: message });
    }
  };

  export const editExchange = (exchange) => async (dispatch, getState) => {
    dispatch({ type: EXCHANGE_EDIT_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.put(`${urls.endpoint}/exchange-service/exchanges`,exchange,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: EXCHANGE_EDIT_SUCCESS, payload: data });
      dispatch(listExchanges());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EXCHANGE_EDIT_FAIL, payload: message });
    }
  };

  export const deleteExchange = (exchangeId) => async (dispatch, getState) => {
    dispatch({ type: EXCHANGE_DELETE_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
       await Axios.delete(`${urls.endpoint}/exchange-service/exchanges/${exchangeId}`,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: EXCHANGE_DELETE_SUCCESS, payload: 'Company Deleted' });
      dispatch(listExchanges());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EXCHANGE_DELETE_FAIL, payload: message });
    }
  };