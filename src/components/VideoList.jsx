import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onPlay, onBookmark }) => {
  return (
    <div>
      {videos.map((video, index) => (
        <VideoItem key={index} video={video} onPlay={onPlay} onBookmark={onBookmark} />
      ))}
    </div>
  );
};

export default VideoList;
