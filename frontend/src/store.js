import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { companyAddReducer, companyDeleteReducer, companyEditReducer, companyListReducer } from './redux/reducers/companyReducers';
import { exchangeAddReducer, exchangeDeleteReducer, exchangeEditReducer, exchangeListReducer } from './redux/reducers/exchangeReducers';
import { ipoAddReducer, ipoDeleteReducer, ipoEditReducer, ipoListReducer } from './redux/reducers/ipoReducers';
import { sectorAddReducer, sectorDeleteReducer, sectorEditReducer, sectorListReducer } from './redux/reducers/sectorReducers';
import { userRegisterReducer, userSigninReducer, userVerifyReducer } from './redux/reducers/userReducers';


const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    companyList:{
      companies:localStorage.getItem('companies')?JSON.parse(localStorage.getItem('companies')):[]
    },
   sectorList:{
      sectors:localStorage.getItem('sectors')?JSON.parse(localStorage.getItem('sectors')):[]
    },
    exchangeList:{
      exchanges:localStorage.getItem('exchanges')?JSON.parse(localStorage.getItem('exchanges')):[]
    },
    ipoList:{
      ipos:localStorage.getItem('ipos')?JSON.parse(localStorage.getItem('ipos')):[]
    },

  };

const reducer = combineReducers({
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    userVerify:userVerifyReducer,
    companyList:companyListReducer,
    sectorList:sectorListReducer,
    exchangeList:exchangeListReducer,
    ipoList:ipoListReducer,
    addCompany:companyAddReducer,
    editCompany:companyEditReducer,
    deleteCompany:companyDeleteReducer,
    addExchange:exchangeAddReducer,
    editExchange:exchangeEditReducer,
    deleteExchange:exchangeDeleteReducer,
    addSector:sectorAddReducer,
    editSector:sectorEditReducer,
    deleteSector:sectorDeleteReducer,
    addIpo:ipoAddReducer,
    editIpo:ipoEditReducer,
    deleteIpo:ipoDeleteReducer,
});






const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );

  export default store;