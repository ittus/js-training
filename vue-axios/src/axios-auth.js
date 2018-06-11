import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vuejs-training-axios.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
