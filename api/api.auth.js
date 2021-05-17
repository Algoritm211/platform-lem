import instanceAxios from './api.config'


class AuthAPI {
  async auth() {
    const { data } = await instanceAxios.get('/auth/authorization')
    console.log(data)
    return data
  }
}


export default new AuthAPI()
