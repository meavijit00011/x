import React from 'react'

const Content = ({id, videoLink, imgSrc, views, duration,setId }) => {
    return (
        <div onTouchMove={setId.bind(null,id)} style={{ height: '170px', width: '170px', border: '1px solid grey', position: 'relative' }}>
            <a href={videoLink} target='_blank'>
                <img src={imgSrc} style={{ height: '170px', width: '170px' }}></img>
                <div style={{color:'white', fontSize: '12px', backgroundColor: 'black', position: 'absolute', bottom: '-4px', right: '0px' }}>{duration} {views}</div>
            </a>
        </div>
    )
}

export default Content