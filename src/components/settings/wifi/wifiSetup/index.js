import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SettingHeader from '../../settingHeader';
import active from '../../../assets/active.png';
import disable from '../../../assets/disable.png';

export default function WifiSetup() {
	const [switch1, setSwitch1] = useState(true);

	let data = [
		{
			activeIcon: <img src={active} alt='wifi-icon' />,
			disableIcon: <img src={disable} alt='wifi-icon' />,
			name: 'aos_guest',
		},
		{
			activeIcon: <img src={active} alt='wifi-icon' />,
			disableIcon: <img src={disable} alt='wifi-icon' />,
			name: 'aos_lebanon',
		},
		{
			activeIcon: <img src={active} alt='wifi-icon' />,
			disableIcon: <img src={disable} alt='wifi-icon' />,
			name: 'aos_mobile',
		},
		{
			activeIcon: <img src={active} alt='wifi-icon' />,
			disableIcon: <img src={disable} alt='wifi-icon' />,
			name: 'aos_workstation',
		},
		{
			activeIcon: <img src={active} alt='wifi-icon' />,
			disableIcon: <img src={disable} alt='wifi-icon' />,
			name: 'ConXus_Test',
		},
		{
			activeIcon: <img src={active} alt='wifi-icon' />,
			disableIcon: <img src={disable} alt='wifi-icon' />,
			name: 'ClickShare-1872241949',
		},
	];
	const handleSwitchChange = () => {
		setSwitch1(!switch1);
	};
	return (
		<div className='setting-date'>
			<div>
				<SettingHeader />
			</div>
			<div className='wifi-status'>
				<Row>
					<Col lg={6} md={6}>
						<strong className='text-white ml-5'>
							{switch1 ? 'On' : 'Off'}
						</strong>
					</Col>
					<Col lg={6} md={6} className='text-right'>
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
			</div>
			<div>
				<ul className='list-unstyled'>
					{data.map((item, i) => (
						<li>
							<span className='mr-3'>
								{switch1 ? item.activeIcon : item.disableIcon}
							</span>
							{item.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
