import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header/Header';
import './landing.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Background from './Background/Background';
import logo from '../../assets/healthtest.png';
import demoModel from '../../assets/Model_Demo.png';
import demoModel1 from '../../assets/Model_card_3.png';
import demoModel2 from '../../assets/Model_Demo_2.png';
import exRef1 from '../../assets/External_reference (1).png';
import exRef2 from '../../assets/External_reference (2).png';
import exRef3 from '../../assets/External_reference (3).png';
import exRef4 from '../../assets/External_reference (4).png';
import exRef5 from '../../assets/External_reference (5).png';
import exRef7 from '../../assets/External_reference (7).png';
import exRef8 from '../../assets/External_reference (8).png';
import { Icon } from '@iconify/react';
  
const Landing = () => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [sumbittedFeed, setSumbittedFeed] = useState(false);

	useEffect(() => {
        const timerId = setTimeout(() => {
            const element = document.getElementById("hero-image");
			element.classList.add('heartbeat');
        }, 1000);
        return () => clearTimeout(timerId);
    }, []);

	const handleSubmit = () => {
        setSumbittedFeed(true);
    }
	
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
				<div className='ref-subtitle'> Links & References </div>
				<br /><hr className='happy-hr' /><br />
				<div className='internal-references'>
					<Link to={'https://huggingface.co/spaces/abhicodes/cross-model-machine-learning-v2/'} target='blank'><img src={demoModel2} alt="Demo_Model_2" /></Link>
					<Link to={'https://huggingface.co/spaces/abhicodes/healthapp/'} target='blank'><img src={demoModel} alt="Demo_Model" /></Link>
					<Link to={'https://github.com/abhishek-yeole/healthhubs/'} target='blank'><img src={demoModel1} alt="Demo_Model_1" /></Link>
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

			<div className='end-spacer' id='about'></div>
            <div className='end-intro'>
                <div className='end-left'>
                    <div className='left-header'>Join the HelathHub Community</div>
                    <div className='left-content'>Join HealthHub on Github to contribute and develop new technologies.</div>
                    <div><Button variant="contained" endIcon={<Icon icon="line-md:arrow-right" />} startIcon={<Icon icon="mdi:github" />} size='small' href='https://github.com/abhishek-yeole/healthhubs'><p style={{fontWeight: 'bolder'}}>Github </p></Button><br /></div>
                    <div className='left-header'>Get Started Today</div>
                    <div className='left-content'>Join HealthHub today and experience a mix of HealthCare and Technology.</div>
                    <Link to={'./user'}><Button variant="contained" endIcon={<Icon icon="line-md:arrow-right" />} size='small' ><p style={{fontWeight: 'bolder'}}>Explore Now !</p></Button></Link>
                </div>
                <div className='end-right'>
                    <div className='right-header'>Contact Us</div>
                    <div className='right-content'>Have questions or need assistance? Our support team is here to help!!</div>
                    <div className='contact-form'>
                        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, display: 'flex', flexDirection: 'row', width: '90%', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }, }} noValidate autoComplete="off">
                            <TextField id="filled-multiline-static" label="Email" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} disabled={sumbittedFeed}/>
                            <TextField id="filled-multiline-static2" label="Message" multiline rows={4} fullWidth variant="filled" value={feedback} onChange={(e) => setFeedback(e.target.value)} disabled= {sumbittedFeed}/>
                        </Box>
                        {sumbittedFeed ? (
                            <div className='form-submit'><Button variant="contained" color='success' endIcon={<Icon icon="fluent:mail-checkmark-24-filled" />}><p style={{fontWeight: 'bolder'}} >SENT</p></Button><br />
                            <b><i>WE WILL REACH OUT TO YOU SOON!!!</i></b></div>
                        ) : (
                            <div className='form-submit'><Button variant="contained" endIcon={<Icon icon="ic:round-mail" />} size='small' onClick={handleSubmit}><p style={{fontWeight: 'bolder'}} >SEND</p></Button></div>
                        )}
                    </div>
                </div>
			</div>
		</div>
	)
}

export default Landing;