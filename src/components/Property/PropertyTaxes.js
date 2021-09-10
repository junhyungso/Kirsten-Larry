import React, { useEffect } from 'react';

import classes from './PropertyTaxes.module.css';

import property from '../../image/property.png';

const PropertyTaxes = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	return (
    <div>
        <div>
            <h1>
                <b><u>Property Taxes</u></b>
            </h1>
        </div>
        <div>
            <img className={classes.image} src={property} alt="" />
        </div>
				<div className={classes.text}>
					<div>
							<b>Property Taxes are increasing while enrollment is decreasing.</b>
					</div>
					<div>
						<ol>
								<li>
										From 2016-2020, student enrollment has decreased by 673 children while the school budget has increased by $11,736,000.
								</li>
								<li>
										Per student spending has increased from $17,866 to $22,090 during the same period.
								</li>
								<li>
										Projected spending per student for the 2021-2022 school year is $22,386 with $15,055 related to classroom expenditures.
								</li>
						</ol>
					</div>
					<div>
							<b>All residents benefit from having a strong school system.  However, the cost of that needs to be balanced with the needs of the community and tied to objectives that will improve the quality of education for our children.</b>
					</div>
					<div>
							Throughout my career, I have used Lean Six Sigma and Design Thinking methodologies to help organizations create efficiencies focusing on People, Process and Technology.  By partnering with the administration, I will work to help the district realize these efficiencies related to costs but also to help focus district spending on initiatives tied to specific objectives.  Through process and technology improvements, the district can realize cost reductions and advance the district into state-of-the-art processes and tools and provide additional STEM related opportunities to the students.
					</div>
				</div>
        
    </div>
	);
};

export default PropertyTaxes;