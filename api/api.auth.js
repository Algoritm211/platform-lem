import instanceAxios from './api.config'

class AuthAPI {
  async auth() {
    const { data } = await instanceAxios.get('/auth/authorization')
    return data
  }

  async registration(userData) {
    const { data } = await instanceAxios.post('/auth/registration', { ...userData })
    return data
  }

  async login(email, password) {
    const { data } = await instanceAxios.post('/auth/login', { email, password })
    return data
  }

  async logout() {
    const { data } = await instanceAxios.post('/auth/logout')
    return data
  }
}


export default new AuthAPI()
