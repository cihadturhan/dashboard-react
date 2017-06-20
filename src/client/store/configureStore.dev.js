import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from 's_redactions';
import axiosMiddleware from 'redux-axios-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import AxiosClients from './AxiosClients';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


window && window.devToolsExtension && window.devToolsExtension();

export default function (initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, reduxImmutableStateInvariant(), axiosMiddleware(AxiosClients))
    )
  );
}
