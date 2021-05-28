import instanceAxios from '../api.config'

class TextAPI {
  // The fields from the text update must be the same as in the Text model (see backend)
  async update(id, updateBody) {
    const { data } = await instanceAxios.patch(`/lesson/text/update/${id}`, updateBody)
    return data
  }

  async create(lessonId) {
    const { data } = await instanceAxios.post(`/lesson/text/create/${lessonId}`)
    return data
  }

  async getOne(id) {
    const { data } = await instanceAxios.get(`/lesson/text/${id}`)
    return data
  }
}

export default new TextAPI()
