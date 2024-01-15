import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header/Header';
import './landing.css';
import Background from './Background/Background';
import logo from '../../assets/healthtest.png';
// import video from '../../assets/test_vid.mp4';
import { Icon } from '@iconify/react';
  
const Landing = () => {
	useEffect(() => {
        const timerId = setTimeout(() => {
            const gradioAppElement = document.getElementById("hero-image");
			gradioAppElement.classList.add('heartbeat');
        }, 1000);
        return () => clearTimeout(timerId);
    }, []);
	
	return (
		<div className='landing'>
			<Header />
			<Background />
			<div className='hero-main'>
				<div className='hero-container'>
					<div className='hero-content'>
						<div className='hero-title'>HealthHub</div><br />
						<div className='hero-subtitle'>Your Health. <br />Your Hub. <br />Your Journey. <br /></div><br />
						<div className='hero-text'>Comprehensive ecosystem for health and wellness. Embark on a journey towards a healthier, happier you. Explore HealthHub today and take the first step towards a life of well-being.</div><br /><br />
						<Link to={'./user'} style={{textDecoration: 'none', color: 'black', display:'flex'}}><div className='hero-explore' style={{display:'flex', alignContent:'center', alignItems:'center'}}>EXPLORE&nbsp;&nbsp; <Icon icon="tdesign:explore" color="red" /></div></Link>
					</div>
					<div className='hero-image'>
						<img id='hero-image' className='tracking-in-expand-fwd-bottom' src={logo} alt="Hero_image" />
						{/* <video width="100%" height="auto" autoPlay loop>
							<source src={video} type="video/mp4" />
							Your browser does not support the video tag.
						</video> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing;