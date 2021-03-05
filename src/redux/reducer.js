const initialState = {
  works: [],
  fetching: true,
  weather: null,
  error: null
}

function nextWorkKey(works) {
  if (works.length < 1) {
    return 1;
  }
  const maxKey = works.reduce((maxKey, work) => Math.max(work.key, maxKey), -1)
  return maxKey + 1
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_WORK': {
      return {
        ...state,
        works: [
          ...state.works,
          {
            key: nextWorkKey(state.works),
            value: action.payload,
            status: 'new'
          }
        ]
      }
    }
    case 'SET_DONE': {
      return {
        ...state,
        works: state.works.map(work => {
          if (work.key !== action.payload) {
            return work
          }

          return {
            ...work,
            status: "done"
          }
        })
      }
    }
    case 'SET_IN_PROGRESS': {
      return {
        ...state,
        works: state.works.map(work => {
          if (work.key !== action.payload) {
            return work
          }

          return {
            ...work,
            status: "in progress"
          }
        })
      }
    }
    case 'DELETE_WORK': {
      return {
        ...state,
        works: state.works.filter(work => work.key !== action.payload)
      }
    }
    case 'FETCH_WEATHER_REQUEST':
      return { ...state, fetching: true, error: null };
    case 'FETCH_WEATHER_SUCCESS':
      return { ...state, fetching: false, weather: action.weather, };
    case 'FETCH_WEATHER_FAILURE':
      return { ...state, fetching: false, weather: null, error: action.error};
    default:
      return state;
  }
}
