import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getIsLoading } from '../../../store/courses/selectors'

const VideoStepEditor = () => {
  const isLoading = useSelector(getIsLoading)
  return (
    <div>
      <h3 className="editor-lesson-title mt-5 mb-3">Enter link on the video down below</h3>
      <input
        className={'inputAcc mb-5'}
        placeholder={'Enter link'}
        type="video-link"
        name="video-link"
        id="video-link"/>
      <span className="info-title d-block">*You can embed a video link from any third party platform(YouTube, Dropbox, Google Drive, ICloud etc). Make sure your students can view the video.</span>
      <Button className="mt-3" type={'submit'} disabled={isLoading}>{isLoading ? 'Saving...' : 'Save'}</Button>
    </div>
  )
}

export default VideoStepEditor
