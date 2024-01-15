import React, { useEffect, useState } from 'react';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = () => {
    setFetching(true);
    fetch('https://meme-api.com/gimme/wholesomememes/5')
      .then((response) => response.json())
      .then((data) => {
        setMemes((prevMemes) => [...prevMemes, ...data.memes]);
        setFetching(false);
      })
      .catch((error) => {
        console.error('Error fetching memes:', error);
        setFetching(false);
      });
  };

  const handleTransitionEnd = (info) => {
    const isLastSlide = info.currentIndex === memes.length - 2;
    if (isLastSlide && !fetching) {
      fetchMemes();
    }
  };

  const handleAutoPlay = () => {
    setPlay(current => !current);
  }

  return (
    <div>
        <button onClick={handleAutoPlay}>AutoPlay?</button>
        <AutoplaySlider
            play={play}
            cancelOnInteraction={false}
            interval={3000}
            bullets={true}
            animation="scaleOutAnimation"
            onTransitionEnd={handleTransitionEnd}
        >
            {memes.map((meme, index) => (
                <div key={index} data-src={meme.url}>
                    <p>{meme.title}</p>
                </div>
            ))}
        </AutoplaySlider>
    </div>
  );
};

export default Memes;
