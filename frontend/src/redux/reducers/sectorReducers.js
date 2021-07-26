import { SECTOR_ADD_FAIL, SECTOR_ADD_REQUEST, SECTOR_ADD_SUCCESS, SECTOR_DELETE_FAIL, SECTOR_DELETE_REQUEST, SECTOR_DELETE_SUCCESS, SECTOR_EDIT_FAIL, SECTOR_EDIT_REQUEST, SECTOR_EDIT_SUCCESS, SECTOR_LIST_FAIL, SECTOR_LIST_REQUEST, SECTOR_LIST_SUCCESS } from "../constants/sectorConstants";


export const sectorListReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case SECTOR_LIST_REQUEST:
        return { loading: true };
      case SECTOR_LIST_SUCCESS:
        return { loading: false, sectors: action.payload };
      case SECTOR_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const sectorAddReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case SECTOR_ADD_REQUEST:
        return { loading: true };
      case SECTOR_ADD_SUCCESS:
        return { loading: false, sector: action.payload };
      case SECTOR_ADD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const sectorEditReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case SECTOR_EDIT_REQUEST:
        return { loading: true };
      case SECTOR_EDIT_SUCCESS:
        return { loading: false, sector: action.payload };
      case SECTOR_EDIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const sectorDeleteReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case SECTOR_DELETE_REQUEST:
        return { loading: true };
      case SECTOR_DELETE_SUCCESS:
        return { loading: false, status: action.payload };
      case SECTOR_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };