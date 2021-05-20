import React, { useEffect, useState } from 'react'

const withPageSize = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [size, setSize] = useState([0, 0])

    function updateSize() {
      setSize([document.documentElement.clientWidth, document.documentElement.clientHeight])
    }

    useEffect(() => {
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, [])
    return (
      <Component {...props} size={size}/>
    )
  }
}

export default withPageSize
