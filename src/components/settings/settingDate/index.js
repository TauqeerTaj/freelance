import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SettingHeader from '../settingHeader';
import './style.css';

export default function SettingDate() {
	const [switch1, setSwitch1] = useState(true);
	const [switch2, setSwitch2] = useState(false);
	const [switch3, setSwitch3] = useState(false);
	const handleSwitchChange = () => {
		setSwitch1(!switch1);
	};
	const handleSwitchChange2 = () => {
		setSwitch2(!switch2);
	};
	const handleSwitchChange3 = () => {
		setSwitch3(!switch3);
	};
	return (
		<div className='setting-date'>
			<div>
				<SettingHeader />
			</div>
			<div>
				<ul className='list-unstyled'>
					<li>
						<Row>
							<Col lg={6} md={6}>
								<strong className='text-dark w-100'>
									Automatic date & time
								</strong>
								<br />
								<span className='text-muted font-weight-normal w-100'>
									Use network-provided time
								</span>
							</Col>
							<Col lg={6} md={6}>
								<div className='custom-control custom-switch float-right'>
									<input
										type='checkbox'
										className='custom-control-input'
										id='customSwitches'
										checked={switch1}
										onChange={handleSwitchChange}
										readOnly
									/>
									<label
										className='custom-control-label'
										htmlFor='customSwitches'
									></label>
								</div>
							</Col>
						</Row>
					</li>
					<li>
						<Row>
							<Col lg={6} md={6}>
								<strong className='text-dark w-100'>
									Automatic date & time
								</strong>
								<br />
								<span className='text-muted font-weight-normal w-100'>
									Use network-provided time
								</span>
							</Col>
							<Col lg={6} md={6}>
								<div className='custom-control custom-switch float-right'>
									<input
										type='checkbox'
										className='custom-control-input'
										id='customSwitches2'
										checked={switch2}
										onChange={handleSwitchChange2}
										readOnly
									/>
									<label
										className='custom-control-label'
										htmlFor='customSwitches2'
									></label>
								</div>
							</Col>
						</Row>
					</li>
					<li>
						<Row>
							<Col lg={12} md={12}>
								<strong
									className={switch2 ? 'text-dark w-100' : 'text-muted w-100'}
								>
									Set date
								</strong>
								<br />
								<span
									className={
										switch2
											? 'text-dark font-weight-nornmal w-100'
											: 'text-muted font-weight-nornmal w-100'
									}
								>
									January 14, 2021
								</span>
							</Col>
						</Row>
					</li>
					<li>
						<Row>
							<Col lg={12} md={12}>
								<strong
									className={switch2 ? 'text-dark w-100' : 'text-muted w-100'}
								>
									Set date
								</strong>
								<br />
								<span
									className={
										switch2
											? 'text-dark font-weight-nornmal w-100'
											: 'text-muted font-weight-nornmal w-100'
									}
								>
									4:07 PM
								</span>
							</Col>
						</Row>
					</li>
					<li>
						<Row>
							<Col lg={12} md={12}>
								<strong className='text-dark w-100'>Select time zone </strong>
								<br />
								<span className='text-dark w-100'>GMT+00:00</span>
							</Col>
						</Row>
					</li>
					<li>
						<Row>
							<Col lg={6} md={6}>
								<strong className='text-dark w-100'>Use 24-hour format</strong>
								<br />
								<span className='text-muted font-weight-normal w-100'>
									1:00 PM
								</span>
							</Col>
							<Col lg={6} md={6}>
								<div className='custom-control custom-switch float-right'>
									<input
										type='checkbox'
										className='custom-control-input'
										id='customSwitches3'
										checked={switch3}
										onChange={handleSwitchChange3}
										readOnly
									/>
									<label
										className='custom-control-label'
										htmlFor='customSwitches3'
									></label>
								</div>
							</Col>
						</Row>
					</li>
				</ul>
			</div>
		</div>
	);
}
