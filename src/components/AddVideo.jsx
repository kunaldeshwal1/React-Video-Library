import React, { useState } from 'react';

const AddVideo = ({ onAdd }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddVideo = () => {
    if (file) {
      onAdd({
        name: file.name,
        file: file,
        bookmarked: false
      });
      setFile(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleAddVideo}>Add Video</button>
    </div>
  );
};

export default AddVideo;
