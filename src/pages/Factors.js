import React from 'react';
import classes from './DistrictInformation.module.css';
import brochurefirstpage from '../image/BrochureMeetPg1.png';
import brochuremeet from '../image/BrochureMeet.pdf';

const Factors = () => {

	return (
		<div>
			<div>
            <h1>
                <b><u>Factors to Consider</u></b>
            </h1>
      </div>

			<div className={classes.row}>
					<img src={brochurefirstpage} alt="brochure1" className={classes.img}/>
			</div> 
			<div className={classes.row}>
				<a href={brochuremeet} target="_blank" rel="noreferrer" className={classes.pdfbutton}>Download Complete Brochure</a>
			</div>
		</div>
	);
};

export default Factors;