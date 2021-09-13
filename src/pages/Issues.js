import React from 'react';
import classes from './Issues.module.css';

import property from '../image/property.png';
import masks from '../image/maskss.png';
import { Link } from 'react-router-dom';


const Issues = () => {

	return (
    <div>
        <div>
            <h1>
                <b><u>Issues</u></b>
            </h1>
        </div>
        <div className={classes.row}>
						<div className={classes.column}>
							<img className={classes.img} src={property} alt="property" />
						</div>

            <div className={classes.column2}>
							<Link to='/propertytaxes'><h2 className={classes.titletext}>Property Taxes</h2></Link>
							<Link to='/propertytaxes'>
								<p className={classes.textlink}>
                  Property Taxes are increasing while enrollment is decreasing. From 2016-2020, student enrollment has decreased by...
                </p>
							</Link>
            </div>
        </div>
        <div className={classes.row}>
					<div className={classes.column}>
						<img className={classes.img} src={masks} alt="masks" />
					</div>
					<div className={classes.column2}>
						<Link to='/masks'><h2 className={classes.titletext}>Masks</h2></Link>
						<Link to='/masks'>
							<p className={classes.textlink}>
								Dr. Nastro is able to help interpret complex information and directives from the State and help support pragmatic solutions for the safety of our children. He believes in providing...
							</p>
						</Link>
					</div>
        </div>
    </div>
	);
};

export default Issues;