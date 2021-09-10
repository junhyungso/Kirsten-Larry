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
		<div class="border" id="Form_1">
				<form className={classes.form1}>
						<div>
								<h2 className={classes.centertext}>
										Volunteer
								</h2>
						</div>
						<div>
								<hr />
						</div>
						<div>
								<label>
										<input name="prefer"
													 value="Knock_on_doors"
													 type="checkbox"
													 class="input-checkbox" /><b>Knock on Doors</b> | Canvas your neighborhood for us
								</label>
								<br />
								<label>
										<input name="prefer"
													 value="Make_calls_at_home"
													 type="checkbox"
													 class="input-checkbox" /><b>Make Calls at Home</b> | Call individuals at home for us
								</label>
								<br />
								<label>
										<input name="prefer"
													 value="Host_an_event"
													 type="checkbox"
													 class="input-checkbox" /><b>Host an Event</b> | Host an event at your house for us
								</label>
								<br />
								<label>
										<input name="prefer"
													 value="Display_lawn_sign"
													 type="checkbox"
													 class="input-checkbox" /><b> Display Lawn Sign</b> | Display a campaign sign for us
								</label>
								<br />
								<label>
										<input name="prefer"
													 value="Social_media_support"
													 type="checkbox"
													 class="input-checkbox" /><b>Support Us on Social Media</b> | Post a supportive message for us
								</label>
								<div className={classes.formelem}>
										<label id="name-label" for="name"></label>
										<input type="text"
													 name="text"
													 id="name"
													 class="form-control"
													 placeholder="Full Name*"
													 required />
								</div>
								<div className={classes.formelem}>
										<label id="address-label" for="address"></label>
										<input type="text"
													 name="text"
													 id="address"
													 class="form-control"
													 placeholder="Address*"
													 required />
								</div>
								<div className={classes.formelem}>
										<label id="email-label" for="email"></label>
										<input type="email"
													 name="email"
													 id="email"
													 class="form-control"
													 placeholder="Enter your email*"
													 required />
								</div>
								<div className={classes.formelem}>
										<label id="number-label" for="Phone_number"></label>
										<input type="text"
													 name="Phone_Number"
													 id="Phone_number"
													 class="form-control"
													 placeholder="Phone #" />
								</div>
								<div className={classes.formelem}>
										<label id="About_them-label" for="About_them"></label>
										<textarea type="text"
													 name="About_them"
													 id="About_them"
													 class="form-control"
													 placeholder="Tell us about yourself" />
								</div>
								<div className={classes.formgroup}>
										<button type="submit" id="submit" className={classes.button}>
												Take Action
										</button>
								</div>
						</div>
				</form>
		</div>
		<div class="border" id="Form_2">
				<form className={classes.form2}>
						<div>
								<h2 className={classes.centertext}>
										Contact Us
								</h2>
						</div>
						<div>
								<hr />
						</div>
								<div className={classes.formgroup}>
										<div className={classes.formelem}>
												<label id="name-label" for="name"></label>
												<input type="text"
															 name="text"
															 id="name"
															 class="form-control"
															 placeholder="Full Name*"
															 required />
										</div>
										<div className={classes.formelem}>
												<label id="email-label" for="email"></label>
												<input type="email"
															 name="email"
															 id="email"
															 class="form-control"
															 placeholder="Email*"
															 required />
										</div>
										<div className={classes.formelem}>
												<label id="number-label" for="Phone_number"></label>
												<input type="text"
															 name="Phone_Number"
															 id="Phone_number"
															 class="form-control"
															 placeholder="Phone #" />
										</div>
										<div className={classes.formelem}>
												<label id="Contact-label" for="Contact_them"></label>
												<textarea type="text"
															 name="Contact"
															 id="Contact"
															 class="form-control"
															 placeholder="Type your message here*"
															 required />
										</div>
										<div className={classes.formgroup}>
												<button type="submit" id="submit" className={classes.button}>
														Send
												</button>
										</div>
								</div>
				</form>
				</div>
		</div>
	);
};

export default Contact;