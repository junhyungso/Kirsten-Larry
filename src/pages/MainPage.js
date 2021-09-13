import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import axios from '../axios';

import classes from './MainPage.module.css';

import KlightPhoto from '../image/Klight Photo (2).jpg';
import LarryPhoto from '../image/Larry Nastro (4).jpg';
import { Link } from 'react-router-dom';

const MainPage = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	
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
			<div className={classes.headertext}>
				<h1>Invested, Unified, <em>Qualified</em>.</h1>
				<h1>For Bernards Children</h1>
			</div>
			<div className={classes.row}>
					<div className={classes.column}>
							<img className={classes.img} src={KlightPhoto} alt="klight" />
					</div>
					<div className={classes.column2}>
							<img className={classes.img} src={LarryPhoto} alt="larry" />
					</div>
		</div>
		<div>
			<Link to='/about'>
				<button className={classes.aboutbutton}>
					<h2>Learn More About Us</h2> 
				</button>
			</Link>
		</div>
		{/* <button className={classes.aboutbutton}>Learn More About Us</button> */}
		<div className={classes.row}>
			<div className={classes.signupform} >
				<form id="signup-form" onSubmit={formSubmitHandler}>
						<div id="signup_title" className={classes.formgroup}>
								<h2 className={classes.centertext}>
										Sign Up to Stay Connected.
								</h2>
								<div>
										<hr />
								</div>
						</div>
						<div>
								<label id="email-label" ></label>
								<input type="email"
											name="email"
											id="email"
											className={classes.formcontrol}
											placeholder="Enter your email"
											onChange={emailChangedHandler}
											required />
								<button type="submit" id="submit" className={classes.submitbutton}>
										Submit
								</button>
						</div>
				</form>
			</div>
		</div>
		
		</div>
	);
}

export default MainPage;