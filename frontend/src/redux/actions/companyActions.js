import Axios from "axios";
import urls from "../../urls";
import { COMPANY_ADD_FAIL, COMPANY_ADD_REQUEST, COMPANY_ADD_SUCCESS, COMPANY_DELETE_FAIL, COMPANY_DELETE_REQUEST, COMPANY_DELETE_SUCCESS, COMPANY_EDIT_FAIL, COMPANY_EDIT_REQUEST, COMPANY_EDIT_SUCCESS, COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS } from "../constants/companyConstants";


export const listCompanies = () => async (dispatch, getState) => {
    dispatch({ type: COMPANY_LIST_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.get(`${urls.endpoint}/company-service/companies`,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: COMPANY_LIST_SUCCESS, payload: data });
      localStorage.setItem('companies',JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMPANY_LIST_FAIL, payload: message });
    }
  };

  export const addCompany = (company) => async (dispatch, getState) => {
    dispatch({ type: COMPANY_ADD_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.post(`${urls.endpoint}/company-service/companies`,company,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: COMPANY_ADD_SUCCESS, payload: data });
      dispatch(listCompanies());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMPANY_ADD_FAIL, payload: message });
    }
  };

  export const editCompany = (company) => async (dispatch, getState) => {
    dispatch({ type: COMPANY_EDIT_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.put(`${urls.endpoint}/company-service/companies`,company,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: COMPANY_EDIT_SUCCESS, payload: data });
      dispatch(listCompanies());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMPANY_EDIT_FAIL, payload: message });
    }
  };

  export const deleteCompany = (companyId) => async (dispatch, getState) => {
    dispatch({ type: COMPANY_DELETE_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
       await Axios.delete(`${urls.endpoint}/company-service/companies/${companyId}`,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: COMPANY_DELETE_SUCCESS, payload: 'Company Deleted' });
      dispatch(listCompanies());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMPANY_DELETE_FAIL, payload: message });
    }
  };