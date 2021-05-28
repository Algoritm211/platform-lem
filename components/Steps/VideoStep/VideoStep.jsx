import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import Loader from '../../Loader/Loader'
import { loadVideoStep } from '../../../store/lessonSteps/thunks'

const VideoStep = ({ stepId }) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)

  useEffect(() => {
    dispatch(loadVideoStep(stepId))
  }, [stepId])

  if (!currentStep) {
    return <Loader />
  }

  return (
    <div style={{ width: '100%' }}>
      <iframe
        className="video-step-player mb-5 mt-3"
        src={currentStep.url}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </div>
  )
}

export default VideoStep
