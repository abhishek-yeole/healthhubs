import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header/Header';
import './landing.css';
import Background from './Background/Background';
import logo from '../../assets/healthtest.png';
import demoModel from '../../assets/Model_Demo.png';
import exRef1 from '../../assets/External_reference (1).png';
import exRef2 from '../../assets/External_reference (2).png';
import exRef3 from '../../assets/External_reference (3).png';
import exRef4 from '../../assets/External_reference (4).png';
import exRef5 from '../../assets/External_reference (5).png';
import exRef7 from '../../assets/External_reference (7).png';
import exRef8 from '../../assets/External_reference (8).png';
import { Icon } from '@iconify/react';
  
const Landing = () => {
	useEffect(() => {
        const timerId = setTimeout(() => {
            const element = document.getElementById("hero-image");
			element.classList.add('heartbeat');
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
					</div>
				</div>
			</div>
			<div className='hero-references'>
				<div className='ref-subtitle'>Internal References</div>
				<br /><hr className='happy-hr' /><br />
				<div className='internal-references'>
					<Link to={'https://huggingface.co/spaces/abhicodes/healthapp/'} target='blank'><img src={demoModel} alt="Demo_Model" /></Link>
					<Link to={'https://huggingface.co/spaces/abhicodes/healthapp/'} target='blank'><img src={demoModel} alt="Demo_Model" /></Link>
					<Link to={'https://huggingface.co/spaces/abhicodes/healthapp/'} target='blank'><img src={demoModel} alt="Demo_Model" /></Link>
				</div><br /><br /><br />
				<div className='ref-subtitle'>External References</div>
				<br /><hr className='happy-hr' /><br />
				<div className='external-references'>
					<Link to={'https://huggingface.co/dima806/facial_emotions_image_detection'} target='blank'><img src={exRef1} alt="External_References" /></Link>
					<Link to={'https://huggingface.co/google/vit-base-patch16-224-in21k'} target='blank'><img src={exRef5} alt="External_References" /></Link>
					<Link to={'https://huggingface.co/SamLowe/roberta-base-go_emotions'} target='blank'><img src={exRef7} alt="External_References" /></Link>
					<Link to={'https://huggingface.co/spaces/Pontonkid/Real-Time-Multilingual-sentiment-analysis'} target='blank'><img src={exRef8} alt="External_References" /></Link>
					<div className='ref-group'>
						<Link to={'https://www.kaggle.com/code/dima806/facial-emotions-image-detection-vit/'} target='blank'><img src={exRef2} alt="External_References" /></Link>
						<Link to={'https://www.kaggle.com/datasets/samaneheslamifar/facial-emotion-expressions/'} target='blank'><img src={exRef3} alt="External_References" /></Link>
					</div>
					<Link to={'https://github.com/openai/whisper'} target='blank'><img src={exRef4} alt="External_References" /></Link>
				</div>
			</div>
			<br />
		</div>
	)
}

export default Landing;