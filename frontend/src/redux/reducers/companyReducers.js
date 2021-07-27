import { COMPANY_ADD_FAIL, COMPANY_ADD_REQUEST, COMPANY_ADD_SUCCESS, COMPANY_DELETE_FAIL, COMPANY_DELETE_REQUEST, COMPANY_DELETE_SUCCESS, COMPANY_EDIT_FAIL, COMPANY_EDIT_REQUEST, COMPANY_EDIT_SUCCESS, COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS } from "../constants/companyConstants";

export const companyListReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case COMPANY_LIST_REQUEST:
        return { loading: true };
      case COMPANY_LIST_SUCCESS:
        return { loading: false, companies: action.payload };
      case COMPANY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const companyAddReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case COMPANY_ADD_REQUEST:
        return { loading: true };
      case COMPANY_ADD_SUCCESS:
        return { loading: false, company: action.payload };
      case COMPANY_ADD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const companyEditReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case COMPANY_EDIT_REQUEST:
        return { loading: true };
      case COMPANY_EDIT_SUCCESS:
        return { loading: false, company: action.payload };
      case COMPANY_EDIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const companyDeleteReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case COMPANY_DELETE_REQUEST:
        return { loading: true };
      case COMPANY_DELETE_SUCCESS:
        return { loading: false, status: action.payload };
      case COMPANY_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };