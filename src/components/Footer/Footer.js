import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import classes from './Footer.module.css';

import Mail from '../../image/Mail.jpg';
import KlightPhoto from '../../image/Klight Photo (2).jpg';
import LarryPhoto from '../../image/Larry Nastro (4).jpg';
import facebook from '../../image/facebook.png';


const Footer = () => {
	const [email, setEmail] = useState('');
  const history = useHistory();

	const emailChangedHandler = (event) => {
		console.log(event.target.value);
		setEmail(event.target.value);
	}
	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log(email,'done')
		const emailObject = {
			email: email
		}
		axios.post("/emails.json", emailObject)
		.then((res) => {
			console.log(res);
			history.push("/");
		})
		.catch((err) => console.log(err));
	}
	return (
		<div className={classes.container}>
		<div className={classes.row}>
				<div className={classes.column}>
						<div>
								<button className={classes.donationbutton}>
									<a href="https://paypal.me/lightandnastrobtboe?locale.x=en_US" target="_blank" rel="noreferrer">
										<h2 className={classes.textlink}>
													Quick Donation (PayPal) / $
											</h2>
									</a>

								</button>
						</div>
						<div className={classes.signupform}>
								<div className={classes.formgroup}>
										<form id="signup-form" onSubmit={formSubmitHandler}>
												<h3 className={classes.centertext}>
														Sign Up for Updates
												</h3>
												<hr />
												<label id="email-label"></label>
												<input type="email"
															 name="email"
															 id="email"
															 className={classes.formcontrol}
															 placeholder="Email"
															 onChange={emailChangedHandler}
															 required />
											<button type="submit" id="submit" className={classes.button}>
												Submit
											</button>
										</form>
								</div>
						</div>
				</div>
				<div className={classes.column2}>
						<Link to='/'>
							<img className={classes.mailer} src={Mail} alt="" />
						</Link>
				</div>
				<div className={classes.column3}>
						<a href="https://www.facebook.com/lightandnastro/" target="_blank">
							<img src={facebook} className={classes.activeImg} alt="facebook" />
						</a>
						<p className={classes.textcenter}>Facebook: LightandNastro</p>
					</div>
			</div>
		<div>
				<h4 className={classes.centertext}>Kirstenlightforbtboe@gmail.com</h4>
		</div>
</div>
	);
};

export default Footer;