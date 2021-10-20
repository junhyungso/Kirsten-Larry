import React from 'react';
import classes from './DistrictInformation.module.css';
import Misinformation1 from '../image/Misinformation1.png';
import MisinformationPDF from '../image/Misinformation.pdf';

const Misinformation = () => {

	return (
		<div>
			<div>
            <h1>
                <b><u>Correcting Incumbents Misinformation</u></b>
            </h1>
      </div>

			<div className={classes.row}>
					<img src={Misinformation1} alt="brochure1" className={classes.img}/>
			</div> 
			<div className={classes.row}>
				<a href={MisinformationPDF} target="_blank" rel="noreferrer" className={classes.pdfbutton}>Download Complete Brochure</a>
			</div>
		</div>
	);
};

export default Misinformation;