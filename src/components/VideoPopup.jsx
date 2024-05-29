import React from 'react';
import ReactModal from 'react-modal';

const VideoPopup = ({ isOpen, video, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <h2>{video.name}</h2>
      <video width="100%" controls>
        <source src={URL.createObjectURL(video.file)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
};

export default VideoPopup;
