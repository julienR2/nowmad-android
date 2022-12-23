const BASE_URL = 'https://nowmad.io/api'

const api = ['get', 'post'].reduce((acc, method) => ({
   ...acc, [method]: (url, params, customHeaders = {}) => {
      const isExternal = url.startsWith('http')

      const fullUrl = isExternal ? url : BASE_URL + url

      const headers = isExternal ? customHeaders : {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + app.LoadText(
               'accessToken'),
            ...customHeaders,
      }

      const query = method === 'get' && params ? '?' + new URLSearchParams(
         params).toString() : ''

      const body = method === 'post' ? JSON.stringify(params) :
         undefined

      return fetch(fullUrl + query, {
         method: method.toUpperCase(),
         headers,
         body
      }).then((res) => isExternal ? res : res.json())
   }
}), {})