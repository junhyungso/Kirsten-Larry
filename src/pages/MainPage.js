import React, { useEffect } from 'react';

import classes from './MainPage.module.css';

import KlightPhoto from '../image/Klight Photo (2).jpg';
import LarryPhoto from '../image/Larry Nastro (4).jpg';
import { Link } from 'react-router-dom';

const MainPage = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	return (
		<>
			<div className={classes.headertext}>
				<h1>Invested, Unified, <em>Qualified</em>.</h1>
				<h1>For Bernards Children</h1>
			</div>
			<section className={classes.row}>
				<div className={classes.column}>
						<img className={classes.img} src={KlightPhoto} alt="klight" />
				</div>
				<div className={classes.column2}>
						<img className={classes.img} src={LarryPhoto} alt="larry" />
				</div>
		</section>
		<div>
			<Link to='/about'>
				<button className={classes.aboutbutton}>
					Learn More About Us 
				</button>
			</Link>
		</div>
		{/* <button className={classes.aboutbutton}>Learn More About Us</button> */}
		<div>
			<form id="signup-form" className={classes.signupform}>
					<div id="signup_title" className={classes.formgroup}>
							<h2 className={classes.centertext}>
									Sign Up to Stay Connected.
							</h2>
							<div>
									<hr />
							</div>
					</div>
					<div>
							<label class="inside" id="email-label" for="email"></label>
							<input type="email"
										name="email"
										id="email"
										className={classes.formcontrol}
										placeholder="Enter your email"
										required />
					</div>
					<div className={classes.formgroup}>
							<button type="submit" id="submit" className={classes.aboutbutton}>
									Submit
							</button>
					</div>
			</form>
		</div>
		</>
	);
}

export default MainPage;