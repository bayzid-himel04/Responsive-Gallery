
import React from 'react';
import '../Style/Gallery.css';

const Gallery = ({
  index,
  imageUrl,
  isSelected,
  isFeature,
  onImageClick,
  onDragOver,
  onDrop,
}) => {
  const handleClick = () => {
    onImageClick(index);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', ''); // Necessary for some browsers
  };

  return (
    <div
      className={`gallery-item ${isSelected ? 'selected' : ''} ${isFeature ? 'feature' : ''}`}
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      draggable
    >
      <img src={imageUrl} alt={`Image ${index + 1}`} />
    </div>
  );
};

export default Gallery;
