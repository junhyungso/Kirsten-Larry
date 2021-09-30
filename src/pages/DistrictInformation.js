import React from 'react';
import classes from './DistrictInformation.module.css';

import brochure1 from '../image/Brochure-4.png';
import brochure2 from '../image/Brochure-5.png';
import brochure from '../image/Brochure.pdf';

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
			<div className={classes.row}>
				<a href={brochure} target="_blank" rel="noreferrer" className={classes.pdfbutton}>Open Complete Brochure</a>
			</div>
		</div>
	);
};

export default DistrictInformation;