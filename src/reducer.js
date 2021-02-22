const initialState = {
  works: []
}

function nextWorkKey(works) {
  if (works.length < 1) {
    return 1;
  }
  const maxKey = works.reduce((maxKey, work) => Math.max(work.key, maxKey), -1)
  return maxKey + 1
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'works/addWork': {
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
    case 'works/setDone': {
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
    case 'works/setIp': {
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
    case 'works/deleteWork': {
      return {
        ...state,
        works: state.works.filter(work => work.key !== action.payload)
      }
    }
    default:
      return state;
  }
}
