import instanceAxios from '../api.config'


class TextAnswerAPI {
  // The fields from the text update must be the same as in the TextWithAnswer model (see backend)
  async update(id, updateBody) {
    const { data } = await instanceAxios.patch(`/lesson/textanswer/update/${id}`, updateBody)
    return data
  }

  async create(lessonId) {
    const { data } = await instanceAxios.post(`lesson/textanswer/create/${lessonId}`)
    return data
  }

  async getOne(id) {
    const { data } = await instanceAxios.get(`/lesson/textanswer/${id}`)
    return data
  }
}

export default new TextAnswerAPI()
