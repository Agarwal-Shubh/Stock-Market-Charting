import Axios from "axios";
import urls from "../../urls";
import { IPO_LIST_FAIL, IPO_LIST_REQUEST, IPO_LIST_SUCCESS } from "../constants/ipoConstants";


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