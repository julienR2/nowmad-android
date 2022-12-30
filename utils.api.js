const BASE_URL = app.IsDebugging() ? 'http://nowmad.io:5000/api' :
   'https://nowmad.io/api'

const api = ['get', 'post'].reduce((acc, method) => ({
   ...acc, [method]: (url, params, customHeaders = {}, bodyParse = JSON.stringify) => {
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

      const body = method === 'post' ? bodyParse(params) :
         undefined

      return fetch(fullUrl + query, {
         method: method.toUpperCase(),
         headers,
         body
      }).then((res) => {
      console.log('res',res)
         if(isExternal) return res

         if(res.status === 401) {
            app.ClearValue('accessToken')
            rootNavigate('Login')
            return
         }
         
         return res.json()
      })
   }
}), {})