import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

//composeWithDevTools is using for inspecting the redux data with Redux Dev Tools Extensions
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(watcherSaga);

export default store
