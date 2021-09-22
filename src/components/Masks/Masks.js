import React, { useEffect } from 'react';
import classes from './Masks.module.css';

import healthsafety from '../../image/healthsafety.png';
const Masks = () => {

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
            <img className={classes.image} src={healthsafety} alt="" />
        </div>
				<div className={classes.text}>
					<div>
							According to the CDC, “when making decisions about how to keep students and staff safe, school and early care and education (ECE) program administrators should consider:	
					</div>
					<br />
					<div>
						<ul>
							<li>How many cases of COVID-19 are in your community.</li>
							<li>The number of people vaccinated in your community.</li>
							<li>Ages of children in the school or Early Care Education programs.”</li>
						</ul>
					</div>
					<div>
					The CDC has failed to address natural immunity in individuals who have had COVID-19 and recovered.
Naturally, these individuals have developed a high level of antibody that is proven more effective than
the spike protein that exists in vaccines. Based on the studies on its effectiveness, other nations are
beginning to amend their vaccination policy requirements to factor in natural immunity, beginning with
Israel.				
					</div>
					<div>
					CDC recommends “layer” prevention strategies. These strategies recommended are: (1) <b>Vaccination</b>;
(2) <b>Masks</b>; (3) Physical distancing; (4) Testing; (5) <b>Ventilation</b>; (6) Handwashing; (7) Keeping children
home when sick and (8) Contact Tracing.
					</div>
					<br />
					<div>
						<b>Masks</b>
					</div>
					<div>
					The CDC also provides specific guidance on the use of masks.
					</div>
					<div>
					“School and early care and education program administrators may choose
to make mask use universally required in your child’s school or ECE
program if:
					</div>
				<div>
					<ul>
						<li>Children are younger than 12 and are not yet eligible for vaccination.</li>
						<li>The number of COVID-19 cases is increasing or high in the school or your community.</li>
						<li>The number of cases caused by a variant of concern is increasing or high in the school or your community.</li>
						<li>The school or ECE program is not able to monitor the vaccine status of children, teachers, or staff.</li>
						<li>The school or ECE program cannot enforce mask policies that are not universal.</li>
						<li>The number of students OR people in your community who are vaccinated is low.</li>
						<li>The school or ECE program is not able to monitor the vaccine status of children, teachers, or staff.</li>
						<li>The school or ECE program cannot enforce mask policies that are not universal.</li>
						<li>The number of students or people in your community who are vaccinated is low.</li>
					</ul>
				</div>
				<div>
					Schools and early care and education programs can make exceptions for children who cannot wear a mask or cannot safely wear a mask.”
				</div>
				<br />
				<div>
					<b>
					Based on these guidelines, the state of the district related to COVID exhibited below and the
fact that other developed nations don’t require masking of school children, there is should be
flexibility for the school district to allow parents to make the decision for their own children.
					</b>
				</div>
				<br />
				<div>
					<b>Ventilation</b>
				</div>
				<br />
				<div>
				One of the opportunities that the district can avail itself of to combat the spread of viruses, not only
currently, but in the future, is to address the CDC’s recommendation of ventilation. The district
currently has an $8.9M capital reserve that can be employed to upgrade the districts HVAC systems,
as recommended by the CDC, in the schools. This provides a variety of benefits:
				</div>
				<div>
					<ul>
						<li>Reduction in the number of virus particles that are airborne</li>
						<li>Reduction of surface contamination</li>
						<li>Upgrade of the air conditioning and heating systems in the district schools to be more effective and less maintenance intensive</li>
						<li>Common sense use of the escalating capital reserve for the benefit of Bernards’ Children</li>
					</ul>
				</div>
				<br />
				<div>
					<b>Summary</b>
				</div>
				<br />
				<div>
				The topic of vaccinations and masks seem to be the most “politically charged” topics facing school
boards today and the root of these issues are personal choice, lack of consistent guidance and
communication causing concern within the community and failure to “follow the science” due to those
failures in guidance and communications. Due to these factors, including the most recent statistics
evaluating the community risk, flexibility should be allowed for parents to make appropriate and
informed decisions based on the medical needs of their children and the school district should look at
implementing the flexibility provided by the existing CDC guidelines.
				</div>
				</div>
    </div>
	);
};

export default Masks;