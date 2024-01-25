import React from 'react';
import './navigation.css';
import Background from '../Landing/Background/Background';
import Header from '../Landing/Header/Header';
import ml from '../../assets/ml.png';
import happy from  '../../assets/mentalhealth.png';
import report from '../../assets/Healthreports.png';
import bot from '../../assets/healthbot.png';
import memes from '../../assets/memes.png';
import pets from '../../assets/pets.png';
import cross from '../../assets/Model_demo_1.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Header />
            <Background /><br /><br /><br /><br /><br />
            <div className='nav-main'>
                <div className='nav-container'>
                    <div className='nav-section-1'>Main Topics <hr className='nav-section' /> </div>
                    <div className='nav-cards'>
                        <Link to={'../ml'} style={{textDecoration:'none', color:'black'}}>
                            <div className='nav-block background-1'>
                                <div className='nav-card-1'>
                                    <div className='nav-image'>
                                        <img src={ml} alt="ML_image" />
                                    </div>
                                    <div className='nav-content'>
                                        <div className='nav-title'>Machine Learning Models</div><br />
                                        <div className='nav-info'>Collected multiple models for the project related to the Healthcare and implemented them on HealthHub.</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={'../crossmodel'} style={{textDecoration:'none', color:'black'}}>
                            <div className='nav-block background-7'>
                                <div className='nav-card-7'>
                                    <div className='nav-image'>
                                        <img src={cross} alt="bot_image" />
                                    </div>
                                    <div className='nav-content'>
                                        <div className='nav-title'>Cross Model Machine Learning</div><br />
                                        <div className='nav-info'>A cross-model ML model for video processing in healthcare sentiment analysis involves combining different machine learning models to analyze sentiments expressed in healthcare-related videos.</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={'../happy'} style={{textDecoration:'none', color:'black'}}>
                            <div className='nav-block  background-2'>
                                <div className='nav-card-2'>
                                    <div className='nav-image'>
                                        <img src={happy} alt="Happy_index" />
                                    </div>
                                    <div className='nav-content'>
                                        <div className='nav-title'>Happy Index</div><br />
                                        <div className='nav-info'>Designed and developed for dealing with emotional and mental wellbieng.</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={'../reports'} style={{textDecoration:'none', color:'black'}}>
                            <div className='nav-block  background-3'>
                                <div className='nav-card-3'>
                                    <div className='nav-image'>
                                        <img src={report} alt="Reports_image" />
                                    </div>
                                    <div className='nav-content'>
                                        <div className='nav-title'>Reports</div><br />
                                        <div className='nav-info'>Different health index calculators are implemented.</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={'../ml'} style={{textDecoration:'none', color:'black'}}>
                            <div className='nav-block background-4'>
                                <div className='nav-card-4'>
                                    <div className='nav-image'>
                                        <img src={bot} alt="bot_image" />
                                    </div>
                                    <div className='nav-content'>
                                        <div className='nav-title'>HealthBot</div><br />
                                        <div className='nav-info'>Your personalized health assistant.</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <br /><br />
                    
                    <div className='nav-section-2'>Extras <hr className='nav-section' /> </div>
                    <div className='nav-cards'>
                        <Link to={'../pet'} style={{textDecoration:'none', color:'black'}}>
                            <div className='nav-block background-5'>
                                <div className='nav-card-5'>
                                    <div className='nav-image'>
                                        <img src={pets} alt="Pets_image" />
                                    </div>
                                    <div className='nav-content'>
                                        <div className='nav-title'>Adopt a Pet!</div><br />
                                        <div className='nav-info'>Adopting a pet animal for emotional support is very beneficial for health.</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={'../memes'} style={{textDecoration:'none', color:'black'}}>
                            <div className='nav-block background-6'>
                                <div className='nav-card-6'>
                                    <div className='nav-image'>
                                        <img src={memes} alt="Memes_image" />
                                    </div>
                                    <div className='nav-content'>
                                        <div className='nav-title'>Relax!</div><br />
                                        <div className='nav-info'>Memes</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div><br />
        </div>
    )
}

export default Navigation;