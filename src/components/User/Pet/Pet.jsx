import React from 'react';
import Videos from './Videos';
import Images from './Images';
import Header from '../../Landing/Header/Header';
import Background from '../../Landing/Background/Background';
import { Button } from '@mui/material';
import './pet.css';
import { Icon } from '@iconify/react';

const Pet = () => {
    const apiKey = 'wFptH8vNz8S3NdCjqXfhJfEnE3dybXzzSImsyhReQssfgx3kf6JMY1O4';
    const videoQuery = 'Cat and Dogs';
    const imageQuery = 'Cat and Dogs';

    return (
        <div className='pet-container'>
            <Header />
            <Background /><br /><br /><br /><br />
            <div className='pet-main'>
                <div className='pet-hero'>
                    <div className='pet-title'>Find Your Furry Friend</div>
                    <div className='pet-subtitle'>Unleash Love, Adopt Joy</div>
                    <div className='pet-info'>Adopting a pet isn't just about bringing a new companion into your life; it's a transformative journey for both humans as well as pet animals. Beyond the joy and companionship they provide, pets contribute significantly to emotional and mental well-being. Studies show that having a pet can reduce stress, alleviate feelings of loneliness, and bring boundless happiness into your daily routine. When you adopt, you're not just gaining a pet; you're gaining a loyal confidant, a source of endless joy, and a cuddle buddy who's always there for you. </div>
                    <Button variant='outlined' endIcon={<Icon icon="solar:arrow-right-broken" />} href='https://thepetnest.com/adopt-a-pet' target='blank'> Explore</Button>
                </div>
                <div className='pet-videos'>
                    <Videos apiKey={apiKey} query={videoQuery} />
                </div>
            </div><br /><br /><br />
            <Images apiKey={apiKey} query={imageQuery} /><br />
            <Button variant='contained' color='success' startIcon={<Icon icon="map:pet-store" />} endIcon={<Icon icon="solar:arrow-right-broken" />} href='https://thepetnest.com/adopt-a-pet' target='blank'>Get a Pet Now!!</Button><br />
        </div>
    );
};

export default Pet;