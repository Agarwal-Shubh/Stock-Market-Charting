import { EXCHANGE_ADD_FAIL, EXCHANGE_ADD_REQUEST, EXCHANGE_ADD_SUCCESS, EXCHANGE_DELETE_FAIL, EXCHANGE_DELETE_REQUEST, EXCHANGE_DELETE_SUCCESS, EXCHANGE_EDIT_FAIL, EXCHANGE_EDIT_REQUEST, EXCHANGE_EDIT_SUCCESS, EXCHANGE_LIST_FAIL, EXCHANGE_LIST_REQUEST, EXCHANGE_LIST_SUCCESS } from "../constants/exchangeConstants";


export const exchangeListReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case EXCHANGE_LIST_REQUEST:
        return { loading: true };
      case EXCHANGE_LIST_SUCCESS:
        return { loading: false, exchanges: action.payload };
      case EXCHANGE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const exchangeAddReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case EXCHANGE_ADD_REQUEST:
        return { loading: true };
      case EXCHANGE_ADD_SUCCESS:
        return { loading: false, exchange: action.payload };
      case EXCHANGE_ADD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const exchangeEditReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case EXCHANGE_EDIT_REQUEST:
        return { loading: true };
      case EXCHANGE_EDIT_SUCCESS:
        return { loading: false, exchange: action.payload };
      case EXCHANGE_EDIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const exchangeDeleteReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case EXCHANGE_DELETE_REQUEST:
        return { loading: true };
      case EXCHANGE_DELETE_SUCCESS:
        return { loading: false, status: action.payload };
      case EXCHANGE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };