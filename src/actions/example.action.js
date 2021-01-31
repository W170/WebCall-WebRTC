import { EXAMPLE_TYPES } from '../action-types/example.actionType'
import request from '../core/api.core'
import { config } from '../config/api/api.config'

export const GET_FILMS = () => dispatch => {
  dispatch({
    type: EXAMPLE_TYPES.GET_FILMS,
    payload: request(config, 'GET', 'films.default'),
  })
}
