import instanceAxios from './api.config'


class LessonAPI {
  // courseId for setting course as parent of lesson
  async create(courseId) {
    const { data } = await instanceAxios.post(`/lesson/create/${courseId}`)
    return data
  }

  async getCourseLessons(id) {
    const { data } = await instanceAxios.get(`/lesson/${id}`)
    return data
  }

  async delete(id) {
    const { data } = await instanceAxios.delete(`/lesson/${id}`)
    return data
  }

  async getOne(id) {
    const { data } = await instanceAxios.get(`/lesson/one/${id}`)
    return data
  }

  async addLessonMark(id, { mark, lessonStepId }) {
    const { data } = await instanceAxios.post(`/lesson/mark/${id}`, { mark, lessonStepId })
    return data
  }

  // updateData obj may contains only fields in Lesson model (see backend)
  async update(id, updateData) {
    const { data } = await instanceAxios.patch(`/lesson/update/${id}`, updateData)
    return data
  }
}

export default new LessonAPI()
