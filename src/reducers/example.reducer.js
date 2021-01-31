import { EXAMPLE_TYPES } from '../action-types/example.actionType'

const initialState = {
  films: [],
}

const example = (state = initialState, action) => {
  switch (action.type) {
    case `${EXAMPLE_TYPES.GET_FILMS}_FULFILLED`:
      return {
        ...state,
        films: action.payload.data,
      }
    default:
      return state
  }
}

export default example
