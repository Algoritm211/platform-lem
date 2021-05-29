import instanceAxios from './api.config'

class UserAPI {
  async uploadAvatar(photoFile) {
    const formData = new FormData()
    formData.append('photo', photoFile)
    const { data } = await instanceAxios.post('user/avatar', formData)
    return data
  }

  async deleteAvatar() {
    const { data } = await instanceAxios.delete('user/avatar')
    return data
  }

  async updateUser(updateObj) {
    const { data } = await instanceAxios.patch('user/update/', updateObj)
    return data
  }

  async deleteAccount() {
    const { data } = await instanceAxios.delete('user/')
    return data
  }

  async addStepToCompleted(stepId) {
    const { data } = await instanceAxios.patch(`user/addcompletedstep?stepId=${stepId}`)
    return data
  }
}


export default new UserAPI()
