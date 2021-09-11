import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {

	return (
		<div>
			<div>
            <h1>
                <b><u>Contact Us</u></b>
            </h1>
      </div>
		
			<div className={classes.buttondiv}>
					<a href="https://forms.gle/WeWfxLE7iuSGGhtd6" target="_blank" rel="noreferrer">
						<button className={classes.volunteerbutton}>
							<h2 className={classes.textlink}>
										Volunteer
							</h2>
						</button>
					</a>
			</div>
			<div className={classes.buttondiv}>
					<a href="https://forms.gle/jmxmQPeZw3Dnf9Wp9" target="_blank" rel="noreferrer">
					<button className={classes.contactbutton}>
						<h2 className={classes.textlink}>
									Contact Us
							</h2>
					</button>
					</a>

			</div>
		</div>
	);
};

export default Contact;