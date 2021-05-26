import instanceAxios from '../api.config'


class VideoAPI {
  // The fields from the text update must be the same as in the Video model (see backend)
  async update(id, updateBody) {
    const { data } = await instanceAxios.patch(`/lesson/video/update/${id}`, updateBody)
    return data
  }
}

export default new VideoAPI()
