import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep, getIsLoading } from '../../../store/lessonSteps/selectors'
import { loadVideoStep, updateVideoStep, deleteVideoStep } from '../../../store/lessonSteps/video.thunk'
import { useTranslation } from 'next-i18next'
import { message } from 'antd'

const VideoStepEditor = ({ stepId }) => {
  const { t } = useTranslation('steps')
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

  const onChangeVideoURL = (event) => {
    setVideoUrl(event.target.value)
  }

  const onUpdate = () => {
    try {
      const url = new URL(videoUrl)
      const videoToken = url.searchParams.get('v')

      const embedLink = `${url.origin}/embed/${videoToken}`
      message.success(t('updateVideoMessage'))
      dispatch(updateVideoStep(currentStep._id, { url: embedLink }))
    } catch (error) {
      message.error('Please, provide valid url')
    }
  }

  const onDeleteLesson = () => {
    dispatch(deleteVideoStep(currentStep._id))
  }


  return (
    <div>
      <div className='d-flex align-items-center justify-content-between'>
        <h3 className="editor-lesson-title mt-5 mb-3">{t('videoMaterial')}</h3>
        <Button
          className="mt-3 btn-danger"
          onClick={onDeleteLesson}
        >
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
      <input
        className={'inputAcc mb-5'}
        placeholder={'Enter link'}
        value={videoUrl}
        onChange={onChangeVideoURL}
        type="video-link"
        name="video-link"
        id="video-link"/>
      <span className="info-title d-block">*{t('videoInfo')}</span>
      <Button
        className="mt-3"
        onClick={onUpdate}
        type={'submit'}
        disabled={isLoading}>{isLoading ? t('saving') : t('save')}</Button>
    </div>
  )
}

export default VideoStepEditor
