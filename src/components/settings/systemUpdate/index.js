import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function SystemUpdate(props) {
	console.log('check props:', props);
	return (
		<div className='system'>
			<div className='system-heading text-center'>
				{props.location?.updation?.mainHeading}
			</div>
			<div className='system-bottom'>
				{props.location.updation.data.map((item, i) => (
					<div className='system-section'>
						<h5>{item.subHeading}</h5>
						<p className='text-white'>{item.content}</p>
						<Link to='/'>
							<button>{item.button}</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
