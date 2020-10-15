import axios from 'axios';

export default{
    request(method, uri, data = null) {
        if (!method) {
            console.error('API function call requires method argument')
            return
          }
      
          if (!uri) {
            console.error('API function call requires uri argument')
            return
          }
          var headers = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
            }
          }
          var url = 'https://5e00f7635c99.ngrok.io' + uri
          console.log(method, uri, data)
    return axios({method, url, data, headers})
    }
}
