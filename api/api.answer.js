import instanceAxios from './api.config'

class AnswerAPI {
  // const { text, score, stepType, stepId: step, userId: user } = req.body
  async add(addAnswerBody) {
    const { data } = await instanceAxios.post(`/answer`, addAnswerBody)
    return data
  }
}

module.exports = new AnswerAPI()
