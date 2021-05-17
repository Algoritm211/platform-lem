import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_APP_URL}/api`,
  withCredentials: true,
})

export default instanceAxios
