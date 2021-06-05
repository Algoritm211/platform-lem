import instanceAxios from '../api.config'

class TestStepAPI {
  // The fields from the testObj update must be the same as in the Test model (see backend)
  async create(lessonId) {
    const { data } = await instanceAxios.post(`/lesson/test/create/${lessonId}`)
    return data
  }

  async update(id, updateObj) {
    const { data } = await instanceAxios.patch(`/lesson/test/update/${id}`, updateObj)
    return data
  }

  async getOne(id) {
    const { data } = await instanceAxios.get(`/lesson/test/${id}`)
    return data
  }
}

export default new TestStepAPI()
