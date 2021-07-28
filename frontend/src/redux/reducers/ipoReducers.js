import { IPO_ADD_FAIL, IPO_ADD_REQUEST, IPO_ADD_SUCCESS, IPO_DELETE_FAIL, IPO_DELETE_REQUEST, IPO_DELETE_SUCCESS, IPO_EDIT_FAIL, IPO_EDIT_REQUEST, IPO_EDIT_SUCCESS, IPO_LIST_FAIL, IPO_LIST_REQUEST, IPO_LIST_SUCCESS } from "../constants/ipoConstants";


export const ipoListReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case IPO_LIST_REQUEST:
        return { loading: true };
      case IPO_LIST_SUCCESS:
        return { loading: false, ipos: action.payload };
      case IPO_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const ipoAddReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case IPO_ADD_REQUEST:
        return { loading: true };
      case IPO_ADD_SUCCESS:
        return { loading: false, ipo: action.payload };
      case IPO_ADD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const ipoEditReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case IPO_EDIT_REQUEST:
        return { loading: true };
      case IPO_EDIT_SUCCESS:
        return { loading: false, ipo: action.payload };
      case IPO_EDIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const ipoDeleteReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case IPO_DELETE_REQUEST:
        return { loading: true };
      case IPO_DELETE_SUCCESS:
        return { loading: false, status: action.payload };
      case IPO_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };