import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './style.css';

export default function SideBar(props) {
	const [list] = useState(props.list);
	const [path, setPath] = useState('');

	// let history = useHistory();

	const clickHandler = (text) => {
		setPath(text);
		// history.push('/');
	};

	return (
		<div className='sidebar'>
			<strong>
				<ul className='list-unstyled'>
					{list.map((item, i) => (
						<li onClick={() => clickHandler(item.path)} key={i}>
							<img
								src={path === item.path ? item.whiteIcon : item.brownIcon}
								alt='img'
							/>
						</li>
					))}
				</ul>
			</strong>
		</div>
	);
}
