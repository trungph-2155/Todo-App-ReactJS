import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
  yield takeLatest('FETCH_WEATHER_REQUEST', workerSaga);
}

function fetchWeather() {
  return axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?id=1583992&appid=137b498a94044f8a946491a3e82afbd1&units=metric'
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchWeather);
    const weather = response.data;

    // dispatch a success action to the store with the weather
    yield put({type: 'FETCH_WEATHER_SUCCESS', weather});

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'FETCH_WEATHER_FAILURE', error})
  }
}
