import React from 'react';
import { useLocation } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default function SettingHeader(props) {
	const location = useLocation();
	console.log('check location:', location);
	return (
		<div className='setting-header'>
			<Row>
				<Col lg={6} md={6}>
					<span>
						{
							<FontAwesome
								className='menuIcon'
								name={location.state.menu}
								size='lg'
								style={{ marginRight: 10, cursor: 'pointer' }}
							/>
						}
					</span>
					<strong>{location.state.text}</strong>
				</Col>
				<Col lg={6} md={6} className='text-right'>
					<span>
						{
							<>
								<FontAwesome
									className='menuIcon'
									name={location.state.home}
									size='lg'
									style={{ marginRight: 10, cursor: 'pointer' }}
								/>
								<Link to='/'>
									<FontAwesome
										className='menuIcon'
										name={location.state.setting}
										size='lg'
										style={{ cursor: 'pointer', marginRight: 10 }}
									/>
								</Link>
								<FontAwesome
									className='menuIcon'
									name={location.state.ellipse}
									size='lg'
									style={{ cursor: 'pointer' }}
								/>
							</>
						}
					</span>
				</Col>
			</Row>
		</div>
	);
}
