import { ADD_WORK, SET_DONE, SET_IN_PROGRESS, DELETE_WORK } from './actionTypes';

export const addWork = work => ({
  type: ADD_WORK,
  payload: work
})

export const setDone = key => ({
  type: SET_DONE,
  payload: key
})

export const setInProgress = key => ({
  type: SET_IN_PROGRESS,
  payload: key
})

export const deleteWork = key => ({
  type: DELETE_WORK,
  payload: key
})