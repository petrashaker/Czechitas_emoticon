import React from 'react';

import {colorsData} from '../../data';
import { useSettings } from '../../setting-context';

const ColorSelector = () => {
	const {handleChange} = useSettings();

	const handleClick = (item) => {
		console.log('color', item.id);
		handleChange(item.value)
	}

	return (
		<div className="items">
			{colorsData.map(color =>
				<div
					className='item'
					key={color.id}
					style={{ backgroundColor: color.value}}
					onClick={() => { handleClick(color) }}
					/>
			)}
		</div>
	);
}

export default ColorSelector;