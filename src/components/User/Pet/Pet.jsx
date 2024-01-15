import React from 'react';
import Videos from './Videos';
import Images from './Images';

const Pet = () => {
    const apiKey = 'wFptH8vNz8S3NdCjqXfhJfEnE3dybXzzSImsyhReQssfgx3kf6JMY1O4';
    const videoQuery = 'Cat and Dogs';
    const imageQuery = 'Cat and Dogs';

    return (
        <div>
            <Videos apiKey={apiKey} query={videoQuery} />
            <Images apiKey={apiKey} query={imageQuery} />
        </div>
    );
};

export default Pet;