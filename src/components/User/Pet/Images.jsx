import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import './pet.css';

const Images = ({ apiKey, query }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = createClient(apiKey);

    const fetchPhotos = async () => {
      try {
        const response = await client.photos.search({ query, per_page: 10 });
        setPhotos(response.photos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [apiKey, query]);

  return (
    <div className='images-container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='images-main'>
          {photos.map((photo) => (
            <div className='images-tracker' key={photo.id}>
                <img src={photo.src.large2x} alt={photo.photographer} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Images;
