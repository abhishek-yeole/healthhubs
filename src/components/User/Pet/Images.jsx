import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';

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
    <div>
      <h1>Search Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {photos.map((photo) => (
            <div key={photo.id}>
              <h2>Photographer: {photo.photographer}</h2>
              <img src={photo.src.large2x} alt={photo.alt} />
              <p>
                <a href={photo.url} target="_blank" rel="noopener noreferrer">
                  View on Pexels
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Images;
