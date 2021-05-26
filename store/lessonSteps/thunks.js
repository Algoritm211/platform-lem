import { toggleIsLoading, updateLesson } from './reducer'
import TextLessonAPI from '../../api/lessonTypes/api.text'
import VideoLessonAPI from '../../api/lessonTypes/api.video'


export const updateTextLesson = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TextLessonAPI.update(id, updateBody)
  dispatch(updateLesson(data.lesson))
  dispatch(toggleIsLoading(false))
}

export const updateVideoLesson = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await VideoLessonAPI.update(id, updateBody)
  console.log(data)
  dispatch(updateLesson(data.lesson))
  dispatch(toggleIsLoading(false))
}
