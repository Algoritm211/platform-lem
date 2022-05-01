import instanceAxios from '../api.config'

class CodeStepAPI {
  // The fields from the text update must be the same as in the Video model (see backend)
  async update(id, updateBody) {
    const { data } = await instanceAxios.patch(`/lesson/code/update/${id}`, updateBody)
    return data
  }

  async create(lessonId) {
    const { data } = await instanceAxios.post(`lesson/code/create/${lessonId}`)
    return data
  }

  async getOne(id) {
    const { data } = await instanceAxios.get(`/lesson/code/${id}`)
    return data
  }

  async checkCode(codeObj) {
    const { data } = await instanceAxios.post(`/lesson/code/check`, codeObj)
    return data
  }
}

export default new CodeStepAPI()
