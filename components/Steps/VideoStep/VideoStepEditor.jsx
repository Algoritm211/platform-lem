import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep, getIsLoading } from '../../../store/lessonSteps/selectors'
import { loadVideoStep, updateVideoLesson } from '../../../store/lessonSteps/thunks'

const VideoStepEditor = ({ stepId }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const [videoUrl, setVideoUrl] = useState('')
  const currentStep = useSelector(getCurrentStep)

  useEffect(() => {
    dispatch(loadVideoStep(stepId))
  }, [stepId])

  useEffect(() => {
    setVideoUrl(currentStep.url)
  }, [currentStep])

  const onUpdate = () => {
    dispatch(updateVideoLesson(currentStep._id, { url: videoUrl }))
  }
  return (
    <div>
      <h3 className="editor-lesson-title mt-5 mb-3">Enter link on the video down below</h3>
      <input
        className={'inputAcc mb-5'}
        placeholder={'Enter link'}
        value={videoUrl}
        onChange={(event) => setVideoUrl(event.target.value)}
        type="video-link"
        name="video-link"
        id="video-link"/>
      <span className="info-title d-block">*You can embed a video link from any third party platform(YouTube, Dropbox, Google Drive, ICloud etc). Make sure your students can view the video.</span>
      <Button
        className="mt-3"
        onClick={onUpdate}
        type={'submit'}
        disabled={isLoading}>{isLoading ? 'Saving...' : 'Save'}</Button>
    </div>
  )
}

export default VideoStepEditor
