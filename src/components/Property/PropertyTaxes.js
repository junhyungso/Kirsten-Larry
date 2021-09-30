import React, { useEffect } from 'react';

import classes from './PropertyTaxes.module.css';

import fiscalresponsibility from '../../image/fiscalresponsibility.png';

const PropertyTaxes = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	return (
    <div>
        <div>
            <h1>
                <b><u>Fiscal Responsibility</u></b>
            </h1>
        </div>
        <div>
            <img className={classes.image} src={fiscalresponsibility} alt="" />
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
					In the State of New Jersey, if the increase to the school budget does not exceed the 2% spending cap,
the district is not required to obtain voter approval. However, just because this rule exists, it does not
mean that the budget should be increased up to the cap every year. The current methodology of the
existing Board members has resulted in a build up of over $8.9M in capital reserves with a current year
allocation of these reserves of only $256K and maintenance reserves of $4.6M with $0 current year
allocation.		
					</div>
					<br />	
					<div>
							<b>All residents benefit from having a strong school system. However, the cost of that needs to be
balanced with the needs of the community and tied to objectives that will improve the quality of
education for our children.</b>
					</div>
				</div>
        
    </div>
	);
};

export default PropertyTaxes;