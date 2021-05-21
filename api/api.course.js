import instanceAxios from './api.config'

class CourseAPI {
  // title, description, category
  async create(formData) {
    const { data } = await instanceAxios.post('/course/create', formData)
    return data
  }

  async all(page, filters) {
    const { data } = await instanceAxios.get(`/course?page=${page}&filters=${filters}`)
    return data
  }

  async one(id) {
    const { data } = await instanceAxios.get(`/course/${id}`)
    return data
  }

  async toggleLike(id) {
    const { data } = await instanceAxios.get(`/course/like?courseId=${id}`)
    return data
  }
}


export default new CourseAPI()
