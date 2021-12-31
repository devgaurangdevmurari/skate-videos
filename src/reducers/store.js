import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './index';

export const store = createStore(appReducer, {}, applyMiddleware(thunk));
