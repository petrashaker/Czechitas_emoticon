import React from 'react';

import {mouthData} from '../../data';
import { useSettings } from '../../setting-context';

const MouthSelector = () => {
	const {handleChange} = useSettings();

	const handleClick = (item) => {
		console.log('mouth', item.id);
		handleChange(item.image);
	}

	return (
		<div className="items">
			{mouthData.map(mouth =>
				<img
					className='item'
					key={mouth.id}
					src={mouth.image}
					onClick={() => { handleClick(mouth) }}
					/>
			)}
		</div>
	);
}

export default MouthSelector;