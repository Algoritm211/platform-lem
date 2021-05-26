import instanceAxios from '../api.config'

class TextAPI {
  // The fields from the text update must be the same as in the Text model (see backend)
  async update(id, updateBody) {
    const { data } = await instanceAxios.patch(`/lesson/text/update/${id}`, updateBody)
    return data
  }
}

export default new TextAPI()
