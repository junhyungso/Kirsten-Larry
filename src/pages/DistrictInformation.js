import React from 'react';
import classes from './DistrictInformation.module.css';

import brochure1 from '../image/Brochure-4.png';
import brochure2 from '../image/Brochure-5.png';


const DistrictInformation = () => {

	return (
		<div>
			<div>
            <h1>
                <b><u>District Information</u></b>
            </h1>
      </div>

			<div className={classes.row}>
				<div className={classes.column}>
					<img src={brochure1} alt="brochure1" className={classes.img}/>
				</div>
				<div className={classes.column}>
					<img src={brochure2} alt="brochure2" className={classes.img}/>
				</div>
			</div>
		</div>
	);
};

export default DistrictInformation;