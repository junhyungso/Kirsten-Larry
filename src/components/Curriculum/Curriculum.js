import React, { useEffect } from 'react';
import classes from './Curriculum.module.css';

import curriculum from '../../image/curriculum.png';

const Curriculum = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	return (
    <div>
        <div>
            <h1>
                <b><u>Health and Safety</u></b>
            </h1>
        </div>
        <div>
            <img className={classes.image} src={curriculum} alt="" />
        </div>
				<div className={classes.text}>
					<div>
										One of the main purposes of education is to build the next generation of
					American citizens. Our students need to have a clear understanding of our
					shared history, <b>good and bad</b>, but in a manner consistent with unifying our
					nation, celebrating our shared heritage, traditions, holidays, and its
					achievements while guiding the next generation to further improve the
					Republic.					</div>
					<br />
					<div>
					Education begins with reflection upon the common humanity of its students. These common
characteristics point to the virtues and vices that are common to all human beings, and education
leads students to know, practice, and love the virtues. A classical education takes a content-rich
approach to the study of important subjects. As students mature in the curriculum, classical education
teaches them to ask, analyze and develop their own thoughts to the big questions.
					</div>
					<div>
					America’s foundational ideas and institutions were born of reflection and choice, not accident and
force. It is essential that our students learn these ideas and how their country has sought to live up to
its founding ideals. Through practice, affection, and knowledge, classical education educates citizens
with a refined and rational love of their country.
					</div>
					<br />
					<div>
					Recent mandates in New Jersey related to Social Emotional Learning and other issues arising around
the nation due to Critical Race Theory, have caused a great deal of concern in the community. This
diversion from the core curriculum reduces the quality of education by diverting time and resources
away from the basics. The tenants of these programs are already being taught and experienced by
our students and community due to the diverse make-up of Bernards Township, the commitment to
Diversity & Inclusion by our Mayor and monitoring though the Harassment, Intimidation and Bullying
policy of the school district. These factors create a community of <b>inclusivity</b>.
					</div>
					<br />
					<div>
						<b>Summary</b>
					</div>
					<br />
					<div>
						<b>
						Our district needs to promote and respect the diversity of thought in the classroom, natural
intellectual curiosity, individual character development and develop critical and independent
thinkers. We believe in equality and meritocracy for all students and that every student has the
same opportunity to succeed with hard work and focus. We believe that parents play a special
role in the success of their children and support their role to be involved in every step in the
decision making for their children.
						</b>
					</div>
				</div>
    </div>
	);
};

export default Curriculum;