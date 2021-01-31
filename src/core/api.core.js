import axios from 'axios'
import qs from 'querystring'
import { get, isEmpty, merge } from 'lodash'

const defaultHeaders = {
  Authorization: `Bearer`,
}

const createBaseURL = (config, endpointReference, params) => {
  let url = `${config.host}${get(config, `endpoints.${endpointReference}`)}`

  if (url.match(/:id/)) {
    url = url.replace(':id', params.id)
  }

  return url
}

const createHeaders = settings => {
  if (isEmpty(settings.headers)) {
    return defaultHeaders
  }

  return merge({}, defaultHeaders, settings.headers)
}

const createConfig = (config, method, endpointReference, params, settings) => {
  return {
    url: createBaseURL(config, endpointReference, params),
    method,
    headers: createHeaders(settings),
    data: qs.stringify(params),
  }
}

const request = async (
  config,
  method,
  endpointReference,
  params,
  settings = {},
) =>
  await axios(createConfig(config, method, endpointReference, params, settings))

export default request
