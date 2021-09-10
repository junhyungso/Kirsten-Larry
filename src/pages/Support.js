import React from 'react';

import classes from './Support.module.css';

import DonorForm from '../image/Donor Compliance Form - Light Nastro (1)-1.png';
import DonorFormPDF from '../image/Donor Compliance Form - Light Nastro (1).pdf';

const Support = () => {
	return (
		<>
		<div id="Buttons">
			<div>
            <h1>
                <b><u>Support Us</u></b>
            </h1>
      </div>
			<div className={classes.head}>
					<h2>
							Click. Download. Mail it.
					</h2>
			</div>
			<div id="donor-form">
					<a target="_blank" rel="noreferrer" href={DonorFormPDF}>
						<img className= {classes.smallimage} src={DonorForm} alt="donor form" />
					</a>
			</div>
    </div>
		<div className={classes.text}>
				<p>
						New Jersey Election Law requires political committees to report the name, mailing address, occupation and name of employer for each individual whose contributions aggregate in excess of $300 per calendar year.
						By submitting the form above, I confirm that the above statements are true and accurate.
						<ul>
								<li>I am a citizen or permanent resident in the United States.</li>
								<li>I affirm that I am making this contribution via personal/corporate credit or debit card for which I have a legal obligation to pay.</li>
								<li>I affirm that I am making this contribution via my personal credit or debit card for which I have a legal obligation to pay, and not through a corporate or business entity card or the card of another person.</li>
								<li>My contribution is made from personal funds, and not from the general treasury funds of a corporation, organization or national bank.</li>
								<li>I have not received any funds from another person or entity for the purposes of making this contribution.</li>
								<li>I am a United States citizen, or a Green Card Holder who has been lawfully admitted for permanent residence and this contribution will not be reimbursed by another person.</li>
						</ul>
				</p>
		</div>
		</>
	);
};

export default Support;