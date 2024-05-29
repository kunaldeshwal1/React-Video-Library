import React from 'react';

const VideoItem = ({ video, onPlay, onBookmark }) => {
  return (
    <div>
      <h3>{video.name}</h3>
      <button onClick={() => onPlay(video)}>Play</button>
      <button onClick={() => onBookmark(video)}>{video.bookmarked ? 'Unbookmark' : 'Bookmark'}</button>
    </div>
  );
};

export default VideoItem;
