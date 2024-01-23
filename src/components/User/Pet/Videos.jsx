import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import './pet.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Videos = ({ apiKey, query }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const client = createClient(apiKey);
    try {
      const response = await client.videos.search({ query, per_page: 10 });
      
      setVideos((prevVideos) => [...prevVideos, ...response.videos]);
      setFetching(false);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setFetching(false);
      setLoading(false);
    }
  };

  const handleTransitionEnd = (info) => {
    const isLastSlide = info.currentIndex === videos.length - 2;
    if (isLastSlide && !fetching) {
      fetchVideos();
    }
  };

  return (
    <div>
      <div className='videos-container'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AutoplaySlider className='videos-slider' bullets={false} animation="scaleOutAnimation" onTransitionEnd={handleTransitionEnd} >
            {videos.map((video, index) => (
              <div className='videos-main' key={index}>
                <video width="400" controls={false} autoPlay={true} >
                  <source src={video.video_files[0].link} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </AutoplaySlider>
        )}
      </div>
    </div>
  );
};

export default Videos;
