import { IPO_LIST_FAIL, IPO_LIST_REQUEST, IPO_LIST_SUCCESS } from "../constants/ipoConstants";


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