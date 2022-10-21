import React from 'react';

import {mouthData} from '../../data';
import { useSettings } from '../../setting-context';

const MouthSelector = () => {
	const {handleMouthChange} = useSettings();

	const handleClick = (item) => {
		console.log('mouth', item.id);
		handleMouthChange(item.image);
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