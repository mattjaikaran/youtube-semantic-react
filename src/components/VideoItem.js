import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item videoItem">
      <img
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
        alt={video.snippet.title} />
      <div className="content">
        {video.snippet.title}
      </div>
    </div>
  )
}

export default VideoItem
