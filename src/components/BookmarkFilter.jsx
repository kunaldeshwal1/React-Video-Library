import React from 'react';

const BookmarkFilter = ({ showBookmarked, onToggle }) => {
  return (
    <div>
      <label>
        Show Bookmarked Only
        <input type="checkbox" checked={showBookmarked} onChange={onToggle} />
      </label>
    </div>
  );
};

export default BookmarkFilter;
