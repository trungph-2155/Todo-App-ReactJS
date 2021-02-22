import { createStore } from 'redux';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

//composeWithDevTools is using for inspecting the redux data with Redux Dev Tools Extensions
const store = createStore(rootReducer, composeWithDevTools())

export default store
