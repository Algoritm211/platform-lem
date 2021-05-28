import React from 'react'

const VideoStep = ({ stepInfo }) => {
  return (
    <div style={{ width: '100%' }}>
      <iframe
        className="video-step-player mb-5"
        src={stepInfo.url}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </div>
  )
}

export default VideoStep
