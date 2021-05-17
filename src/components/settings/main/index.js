import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Popup from '../../popup';
import './style.css';

export default function Settings() {
	const [modalShow, setModalShow] = useState(false);
	const [heading, setHeading] = useState('');
	const [button, setButton] = useState([]);
	const [content, setContent] = useState({});

	const showModal = (title, button, content) => {
		setModalShow(true);
		setHeading(title);
		setButton([...button]);
		setContent({ ...content });
	};
	return (
		<div className='settings'>
			<span className='heading'>Settings</span>
			<span className='w-100 float-left mt-3'>Temperature Units:</span>
			<ul className='list-unstyled'>
				<li>
					<Row>
						<Col lg={4} md={4}>
							<span className='label'>
								<Link
									to={{
										pathname: '/setting-date',
										state: {
											text: 'Date & time',
											menu: 'bars',
											home: 'home',
											setting: 'cog',
										},
									}}
								>
									Date and Time
								</Link>
							</span>
						</Col>
						<Col lg={4} md={4}>
							<span className='date'>
								Jan 14, 2021 <br /> 4:06:13 PM GMT+0:00:00
							</span>
						</Col>
						<Col lg={4} md={4} className='text-right'>
							<div class='form-check form-check-inline'>
								<input
									class='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio1'
									value='option1'
								/>
								<strong class='form-check-label text-white' for='inlineRadio1'>
									&#8457;
								</strong>
							</div>
							<div class='form-check form-check-inline'>
								<input
									class='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio2'
									value='option2'
								/>
								<strong class='form-check-label text-white' for='inlineRadio2'>
									&#8451;
								</strong>
							</div>
							<div>
								<button>SET</button>
							</div>
						</Col>
					</Row>
				</li>
				<li
					onClick={() =>
						showModal('Select Language', ['', 'CANCEL', 'SAVE'], {
							type: 'input',
							data: ['English (英语)', '中文 (Chinese)'],
						})
					}
				>
					<span>Language</span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
				<li>
					<span>
						<Link
							to={{
								pathname: '/wifi-setup',
								state: {
									text: 'Wifi',
									menu: 'bars',
									home: 'home',
									setting: 'cog',
									ellipse: 'ellipsis-v',
								},
							}}
						>
							WiFi Setup
						</Link>
					</span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
				<li
					onClick={() =>
						showModal('WiFi Guardian', ['AUTO', 'DISABLE', 'ENABLE'], {
							type: 'text',
							data: [
								'The WiFi Guardian can help ensure your WiFi connection stays connected.',
								'The current setting if Off: Wifi Guardian is disabled.',
								'Do you wish to enable Wifi Guardian?',
							],
						})
					}
				>
					<span>WiFi Guardian</span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
				<li>
					<span>
						<Link
							to={{
								pathname: '/system',
								updation: {
									mainHeading: 'System Update',
									data: [
										{
											subHeading: 'Internet Update',
											content:
												'Click the button to check the Internet for available updates.',
											button: 'Check for Updates',
										},
										{
											subHeading: 'USB Flash Drive Update',
											content:
												'Click the button to check attached USB flash drives for available updates.',
											button: 'Check for Updates',
										},
									],
								},
							}}
						>
							System Update
						</Link>
					</span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
				<li>
					<span>
						<Link
							to={{
								pathname: '/system',
								updation: {
									mainHeading: 'Loch’n Link',
									data: [
										{
											subHeading: 'Save Parameters',
											content:
												'Click the button below to save the current device parameters to an attached USB flash drive.',
											button: 'Save Parameters',
										},
										{
											subHeading: 'Load Parameters',
											content:
												'Click the button below to load device parameters from an attached USB flash drive and apply them to the unit.',
											button: 'Load Parameters',
										},
									],
								},
							}}
						>
							Loch’n Link
						</Link>
					</span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
				<li
					onClick={() =>
						showModal('Restart Control Panel', ['', 'CANCEL', 'RESTART'], {
							type: 'text',
							data: [
								'This will restart the device control panel. Your unit will continue to function while the panel is restarting',
							],
						})
					}
				>
					<span>Restart Control Panel </span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
				<li
					onClick={() =>
						showModal('Set Screen Saver', ['', 'CANCEL', 'SAVE'], {
							type: 'input',
							data: ['Enable', 'Disable'],
						})
					}
				>
					<span>Screen Saver Mode</span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
				<li
					onClick={() =>
						showModal('Screen Orientation', ['', 'CANCEL', 'SAVE'], {
							type: 'text',
							data: [
								'Press the ROTATE button to select the correct orientation.',
							],
						})
					}
				>
					<span>Screen Orientation</span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
				<li
					onClick={() =>
						showModal('Help', [], {
							type: 'text',
							data: [
								'For technical and additional information on the application',
								'please Visit:',
								'www.lochinvar.com',
							],
						})
					}
				>
					<span>Help</span>
					<FontAwesome
						className='menuIcon'
						name='angle-right'
						size='lg'
						style={{
							cursor: 'pointer',
							float: 'right',
							color: '#464646',
							fontWeight: 'bold',
							fontSize: 30,
						}}
					/>
				</li>
			</ul>
			<Popup
				show={modalShow}
				onHide={() => setModalShow(false)}
				heading={heading}
				button={button}
				content={content}
			/>
		</div>
	);
}
