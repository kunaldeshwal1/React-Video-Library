import React, { useState } from 'react';
import VideoList from '../components/VideoList';
import VideoPopup from '../components/VideoPopup';
import AddVideo from '../components/AddVideo';
import BookmarkFilter from '../components/BookmarkFilter';

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showBookmarked, setShowBookmarked] = useState(false);

  const handleAddVideo = (video) => {
    setVideos([...videos, video]);
  };

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
    setIsPopupOpen(true);
  };

  const handleBookmarkVideo = (video) => {
    setVideos(videos.map(v => v === video ? { ...v, bookmarked: !v.bookmarked } : v));
  };

  const handleToggleFilter = () => {
    setShowBookmarked(!showBookmarked);
  };

  const filteredVideos = showBookmarked ? videos.filter(v => v.bookmarked) : videos;

  return (
    <div>
      <h1>Video Library</h1>
      <AddVideo onAdd={handleAddVideo} />
      <BookmarkFilter showBookmarked={showBookmarked} onToggle={handleToggleFilter} />
      <VideoList videos={filteredVideos} onPlay={handlePlayVideo} onBookmark={handleBookmarkVideo} />
      {selectedVideo && (
        <VideoPopup isOpen={isPopupOpen} video={selectedVideo} onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
};

export default HomePage;
