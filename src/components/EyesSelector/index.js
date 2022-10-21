import React from 'react';

import {eyesData} from '../../data';
import { useSettings } from '../../setting-context';

const EyesSelector = () => {
	const { handleEyesChange } = useSettings();

	const handleClick = (item) => {
		console.log('eyes', item.id);
		handleEyesChange(item.image);
	}

	return (
		<div className="items">
			{eyesData.map(eyes =>
				<img
					className='item'
					key={eyes.id}
					src={eyes.image}
					onClick={() => { handleClick(eyes) }}
					/>
			)}
		</div>
	);
}

export default EyesSelector;