import React from 'react'

const Video = ({ source,videoLink }) => {
  return (
    <a href={videoLink} target='_blank' style={{ height: '170px', width: '170px' }}>
      <video src={source} style={{ height: '170px', width: '170px' }} muted autoPlay={true} loop></video>
    </a>
  )
}

export default Video