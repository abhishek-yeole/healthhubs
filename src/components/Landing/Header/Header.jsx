import React from 'react';
import './header.css';
import logo from '../../../assets/logo_health_1.png';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-main'>
				<div className='header-container'>
					<div className='header-navbar'>
						<Link to={'../'}>
							<div className='header-logo'>
								<img src={logo} alt="HealthHub_Logo" />
							</div>
						</Link>
						<div className='header-buttons'>
							<a href='#about'><div className='header-about'><Icon icon="mdi:about" fontSize={24} />&nbsp; <div className='hide-unhide'>About</div></div></a>
							<a href='https://github.com/abhishek-yeole/healthhubs' target='blank'><div className='header-github'><Icon icon="mdi:github" fontSize={24} />&nbsp; <div className='hide-unhide'>Github</div></div></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header