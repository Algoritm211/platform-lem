import React from 'react'

const TextStep = ({ stepInfo }) => {
  return (
    <div>
      <p className="courses-lecture mb-5" dangerouslySetInnerHTML={{ __html: stepInfo.body }}/>
    </div>
  )
}

export default TextStep
