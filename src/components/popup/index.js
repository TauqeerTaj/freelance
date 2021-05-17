import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ScreenImg from '../assets/screen-orentation.png';
import './style.css';

export default function Popup(props) {
	return (
		<div className='popup float-left w-100'>
			<Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
				<Modal.Header>
					<Modal.Title
						id='contained-modal-title-vcenter'
						className={
							props.heading === 'Help' ? 'text-center w-100' : 'text-left'
						}
					>
						{props.heading}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body
					className={props.heading === 'Help' ? 'text-center' : 'show-grid'}
				>
					{props.content.type === 'input'
						? props.content?.data?.map((item, i) => (
								<p key={i}>
									<div class='form-check form-check-inline'>
										<input
											class='form-check-input'
											type='radio'
											name='inlineRadioOptions'
											id={`inlineRadio${i}`}
											value='option1'
										/>
										<span
											class='form-check-label text-white ml-2'
											for={`inlineRadio${i}`}
										>
											{item}
										</span>
									</div>
								</p>
						  ))
						: props.content?.data?.map((item, i) => (
								<p key={i}>
									<span
										style={
											item === 'www.lochinvar.com'
												? { borderBottom: '2px solid #fff', cursor: 'pointer' }
												: {}
										}
									>
										{item}
									</span>
								</p>
						  ))}
					{props.heading === 'Screen Orientation' ? (
						<div className='text-center'>
							<img src={ScreenImg} alt='screen orientation' />
						</div>
					) : null}
				</Modal.Body>
				<Modal.Footer>
					{props.button.map((item, i) => (
						<Button onClick={props.onHide} key={i}>
							{item}
						</Button>
					))}
				</Modal.Footer>
			</Modal>
		</div>
	);
}
