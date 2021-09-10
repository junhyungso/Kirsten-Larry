import React, { useEffect } from 'react';
import classes from './Masks.module.css';

import masks from '../../image/maskss.png';

const Masks = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	return (
    <div>
        <div>
            <h1>
                <b><u>Masks</u></b>
            </h1>
        </div>
        <div>
            <img className={classes.image} src={masks} alt="" />
        </div>
				<div className={classes.text}>
					<div>
							<b>
									Dr. Nastro is able to help interpret complex information and directives from the State and help support pragmatic solutions for the safety of our children.
							</b>
					</div>
					<div>
							He believes in providing the students of Bernards Township with a quality education in a cost effective manner assuring that the Curriculum offered to our students maintains the high standards of education that Bernards Township is known for.
					</div>
				</div>
    </div>
	);
};

export default Masks;