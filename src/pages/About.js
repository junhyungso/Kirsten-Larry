import React, { useEffect } from 'react';
import classes from './About.module.css';

import KlightPhoto from '../image/Klight Photo (2).jpg';
import LarryPhoto from '../image/Larry Nastro (4).jpg';

const About = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	return (
    <div>
        <div>
            <h1>
                <b><u>About Us</u></b>
            </h1>
        </div>
        <div>
            <div className={classes.row}>
							<div className={classes.column}>
								<img className={classes.img} src={KlightPhoto} alt="klight" />
							</div>
							
              <div className={classes.column2} id="who-kirsten">
								<h2><b>Who is Kirsten Light?</b></h2>
								<hr />
								<p>
										<b>Kirsten LIGHT</b> lives in Basking Ridge with her husband, Frank and their
										two children, Caeli and Jaxon. She works for <b>Ernst & Young</b> as a Senior
										Manager in their Tax Technology and Transformation practice. Her data-driven focus is transforming organizations to be <b><i>‘right-sized’</i></b>,
										<b><i>efficient</i></b> and <b><i>cost effective</i></b> implementing technology solutions to
										facilitate those changes. Using Design Thinking, she develops 
										<b><i>innovative solutions</i></b> to solve budget issues. She is a licensed Certified
										Public Accountant, a member of the AICPA and a licensed soccer coach.
								</p>
								<p>
                    <b>WHY SHE IS RUNNING:</b> She feels that children need a sense of belonging to a community to thrive where the curriculum and messaging are free from politics and the focus is on developing life skills that will help them be
                    successful adults. She believes in <b><i>fiscal responsibility</i></b>, <b><i>in-person learning</i></b>, <b><i>flexibility</i></b> to allow the parents to make decisions for
                    their own children while keeping the community safe and creating a culture that supports <b><i>inclusivity</i></b>. As a long-term resident of
                    Bernards Township, she is committed to improving the quality of life for the community.
                </p>
              </div>
            </div>
            <div>

            </div>
        </div>
        <div>
            <div className={classes.row}>
							<div className={classes.column}>
								<img className={classes.img} src={LarryPhoto} alt="larry"/>
							</div>
							<div className={classes.column2}>
									<h2><b>Who is Dr. Larry Nastro?</b></h2>
									<hr />
									<p>
											<b>Dr. Lawrence NASTRO</b> has been living in in Basking Ridge since 2009. He and Dorothy Nastro have two adult daughters and
											two grandsons. He is <b><i>Board Certified in Internal Medicine, Infectious Diseases and Pulmonary Disease</i></b> and has served as <b><i>Director of Infectious Diseases at Overlook Hospital</i></b> in Summit, NJ for 30 years.
											He began caring for patients in 1973 after serving two years on active duty in the <b>
													<i>
															United States Air
															Force
													</i>
											</b> and has been retired from clinical practice since 2017. His significant experience provides him
											with the unique ability to help interpret the State guidance and provide thoughtful insight and
											pragmatic solutions to support a safe return of students to classrooms.
									</p>
									<p>
                        <b>WHY HE IS RUNNING:</b> He believes in providing our students with a quality education assuring
                        that the curriculum offered maintains the high standard of education that Bernards Township is
                        known for.
                    </p>
							</div>
            </div>
        </div>
    </div>
	);
};

export default About;