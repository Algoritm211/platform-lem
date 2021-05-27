import React from 'react'

const VideoStep = ({ stepInfo }) => {
  return (
    <div>
      <iframe
        width="400" height="250"
        src={stepInfo.url}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </div>
  )
}

export default VideoStep
