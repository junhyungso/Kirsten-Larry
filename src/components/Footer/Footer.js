import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

import Mail from '../../image/Mail.jpg';

const Footer = () => {
	return (
		<div className={classes.container}>
		<div className={classes.row}>
				<div className={classes.column}>
						<div>
								<button className={classes.donationbutton}>
									<a href="https://paypal.me/lightandnastrobtboe?locale.x=en_US" target="_blank" rel="noreferrer">
										<h2 className={classes.textlink}>
													Quick Donation / $
											</h2>
									</a>

								</button>
						</div>
						<div className={classes.signupform}>
								<div className={classes.formgroup}>
										<form id="signup-form">
												<h3 className={classes.centertext}>
														Sign Up for Updates
												</h3>
												<hr />
												<label id="email-label" for="email"></label>
												<input type="email"
															 name="email"
															 id="email"
															 className={classes.formcontrol}
															 placeholder="Email"
															 required />
										</form>
								</div>
								<div className={classes.formgroup}>
										<button type="submit" id="submit" className={classes.button}>
												Submit
										</button>
								</div>
						</div>
				</div>
				<div className={classes.column2}>
						<Link to='/'>
							<img className={classes.mailer} src={Mail} alt="" />
						</Link>
				</div>
				<div className={classes.column3}>
					
				</div>
		</div>
		<div>
				<p className={classes.centertext}>Kirstenlightforbtboe@gmail.com</p>
		</div>
</div>
	);
};

export default Footer;