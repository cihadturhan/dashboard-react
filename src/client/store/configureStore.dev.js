import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../pages/App/reducers';
import axiosMiddleware from 'redux-axios-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import AxiosClients from './AxiosClients';

export default function (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant(), axiosMiddleware(AxiosClients))
  );
}
