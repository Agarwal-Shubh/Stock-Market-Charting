import Axios from "axios";
import urls from "../../urls";
import { SECTOR_ADD_FAIL, SECTOR_ADD_REQUEST, SECTOR_ADD_SUCCESS, SECTOR_DELETE_FAIL, SECTOR_DELETE_REQUEST, SECTOR_DELETE_SUCCESS, SECTOR_EDIT_FAIL, SECTOR_EDIT_REQUEST, SECTOR_EDIT_SUCCESS, SECTOR_LIST_FAIL, SECTOR_LIST_REQUEST, SECTOR_LIST_SUCCESS } from "../constants/sectorConstants";


export const listSectors = () => async (dispatch, getState) => {
    dispatch({ type: SECTOR_LIST_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.get(`${urls.endpoint}/sector-service/sectors`,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: SECTOR_LIST_SUCCESS, payload: data });
      localStorage.setItem('sectors',JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SECTOR_LIST_FAIL, payload: message });
    }
  };
  export const addSector = (sector) => async (dispatch, getState) => {
    dispatch({ type: SECTOR_ADD_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.post(`${urls.endpoint}/sector-service/sectors`,sector,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: SECTOR_ADD_SUCCESS, payload: data });
      dispatch(listSectors());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SECTOR_ADD_FAIL, payload: message });
    }
  };

  export const editSector = (sector) => async (dispatch, getState) => {
    dispatch({ type: SECTOR_EDIT_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.put(`${urls.endpoint}/sector-service/sectors`,sector,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: SECTOR_EDIT_SUCCESS, payload: data });
      dispatch(listSectors());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SECTOR_EDIT_FAIL, payload: message });
    }
  };

  export const deleteSector = (sectorId) => async (dispatch, getState) => {
    dispatch({ type: SECTOR_DELETE_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
       await Axios.delete(`${urls.endpoint}/sector-service/sectors/${sectorId}`,{
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: SECTOR_DELETE_SUCCESS, payload: 'Company Deleted' });
      dispatch(listSectors());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SECTOR_DELETE_FAIL, payload: message });
    }
  };