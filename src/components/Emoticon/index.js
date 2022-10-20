import React from 'react';
import './style.css';

import { useSettings } from '../../setting-context';

const Emoticon = () => {
	const {eyes, mouth, color} = useSettings();
	return (
		<div className='emoticon' style={{ backgroundColor: color }}>
			<img className="emoticon__eyes" src={eyes} />
			<img className="emoticon__mouth" src={mouth} />
		</div>
	);
}

export default Emoticon;