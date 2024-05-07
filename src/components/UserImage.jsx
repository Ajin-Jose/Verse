import { useState, useEffect } from 'react';

const UserImage = ({ image, imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const isGoogleDriveLink = image && image.startsWith('https://drive.google.com/file/d/');

  const displayImage = imageUrl || image;

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(displayImage);
        if (!response.ok) {
          throw new Error('Failed to load image');
        }
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    loadImage();
  }, [displayImage]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!isLoading && !error && <img src={displayImage} alt="User Image" />}
    </div>
  );
};

export default UserImage;
