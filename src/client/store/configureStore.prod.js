import {createStore, applyMiddleware} from 'redux';
import rootReducer from 's_redactions';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import AxiosClients from './AxiosClients';

export default function (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, axiosMiddleware(AxiosClients))
  );
}
