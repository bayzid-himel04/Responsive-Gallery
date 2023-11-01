
import React, { useState } from 'react';
import Gallery from '../src/Component/Gallery';
import '../src/Style/Gallery.css';
import image1 from '../src/Image/image-1.webp';
import image2 from '../src/Image/image-2.webp';
import image3 from '../src/Image/image-3.webp';
import image4 from '../src/Image/image-4.webp';
import image5 from '../src/Image/image-5.webp';
import image6 from '../src/Image/image-6.webp';
import image7 from '../src/Image/image-7.webp';
import image8 from '../src/Image/image-8.webp';
import image9 from '../src/Image/image-9.webp';
import image10 from '../src/Image/image-10.jpeg';
import image11 from '../src/Image/image-11.jpeg';
const App = () => {
  const initialImages = [image1, image2, image3,image4,image5,image6,image7,image8,image9,image10,image11];

  const [images, setImages] = useState(initialImages);
  const [selectedImages, setSelectedImages] = useState([]);
  const [featureImageIndex, setFeatureImageIndex] = useState(0);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedImage = images[selectedImages[0]];
    const newImages = [...images];
    newImages.splice(selectedImages[0], 1);
    newImages.splice(index, 0, draggedImage);
    setImages(newImages);
    setSelectedImages([]);
  };

  const handleDelete = () => {
    const newImages = images.filter((_, index) => !selectedImages.includes(index));
    setImages(newImages);
    setSelectedImages([]);
  };

  const handleImageClick = (index) => {
    const newSelectedImages = [...selectedImages];
    if (newSelectedImages.includes(index)) {
      // Deselect the image if already selected
      const indexToRemove = newSelectedImages.indexOf(index);
      newSelectedImages.splice(indexToRemove, 1);
    } else {
      // Select the image if not selected
      newSelectedImages.push(index);
    }
    setSelectedImages(newSelectedImages);
  };

  return (
    <div>
      <h1>Responsive Image Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <Gallery
            key={image} 
            index={index}
            imageUrl={image}
            isSelected={selectedImages.includes(index)}
            isFeature={index === featureImageIndex}
            onImageClick={handleImageClick}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          />
        ))}
      </div>
      <div>
        <button onClick={handleDelete} disabled={selectedImages.length === 0}>
          Delete Selected
        </button>
      </div>
    </div>
  );
};

export default App;
