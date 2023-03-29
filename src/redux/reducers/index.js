import { combineReducers } from 'redux';
import exchangeRates from './exchangeRates';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({ user, wallet, exchangeRates });

export default rootReducer;
