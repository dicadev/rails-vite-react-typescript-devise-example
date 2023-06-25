// import axios from 'axios'

// axios.defaults.xsrfCookieName = 'CSRF-TOKEN'
// axios.defaults.xsrfHeaderName = 'X-CSRF-Token'
// axios.defaults.withCredentials = true

// export default axios

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

// async function fetchCsrfToken (): Promise<any> {
//   try {
const response = await axios.get('/session') // Update with your backend URL
const csrfToken = response.data.csrf_token

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken
console.log('T axios: ', axios.defaults.headers.common['X-CSRF-Token'], response)
// } catch (error) {
//   console.error('Error fetching CSRF token:', error)
// }
// }

// // Call the fetchCsrfToken function to retrieve and set the CSRF token
// fetchCsrfToken()

export default axios
