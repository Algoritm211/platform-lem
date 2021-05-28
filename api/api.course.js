import instanceAxios from './api.config'

class CourseAPI {
  // title, description, category
  async create(formData) {
    const { data } = await instanceAxios.post('/course/create', formData)
    return data
  }

  // title, description, about, id
  async update(formValues) {
    const { data } = await instanceAxios.post('/course/update', formValues)
    return data
  }

  async updatePreview(formData) {
    const { data } = await instanceAxios.post('/course/preview-update', formData)
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

  async toggleReady(id) {
    const { data } = await instanceAxios.patch(`/course/toggleready/${id}`)
    return data
  }

  async subscribe(id) {
    const { data } = await instanceAxios.get(`course/subscribe?courseId=${id}`)
    return data
  }

  async unsubscribe(id) {
    const { data } = await instanceAxios.delete(`course/subscribe?courseId=${id}`)
    return data
  }

  async getUserCourses() {
    const { data } = await instanceAxios.get('course/user')
    return data
  }
}


export default new CourseAPI()
