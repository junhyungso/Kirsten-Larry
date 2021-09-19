import React from 'react';
import classes from './Issues.module.css';

import fiscalresponsibility from '../image/fiscalresponsibility.png';
import healthsafety from '../image/healthsafety.png';
import curriculum from '../image/curriculum.png';
import missionstatement from '../image/missionstatement.png';

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
							<img className={classes.img} src={fiscalresponsibility} alt="property" />
						</div>

            <div className={classes.column2}>
							<Link to='/propertytaxes'><h2 className={classes.titletext}>Fiscal Responsibility</h2></Link>
							<Link to='/propertytaxes'>
								<p className={classes.textlink}>
                  Property Taxes are increasing while enrollment is decreasing. 1. From 2016-2020, student enrollment has decreased by...
                </p>
							</Link>
            </div>
        </div>
        <div className={classes.row}>
					<div className={classes.column}>
						<img className={classes.img} src={healthsafety} alt="masks" />
					</div>
					<div className={classes.column2}>
						<Link to='/masks'><h2 className={classes.titletext}>Health and Safety</h2></Link>
						<Link to='/masks'>
							<p className={classes.textlink}>
								According to the CDC, “when making decisions about how to keep students and staff safe, school and early care and education (ECE) program administrators should consider:
							</p>
						</Link>
					</div>
        </div>
				<div className={classes.row}>
					<div className={classes.column}>
						<img className={classes.img} src={curriculum} alt="curriculum" />
					</div>
					<div className={classes.column2}>
						<Link to='/curriculum'><h2 className={classes.titletext}>Curriculum</h2></Link>
						<Link to='/curriculum'>
							<p className={classes.textlink}>
							One of the main purposes of education is to build the next generation of
American citizens. Our students need to have a clear understanding of our
shared history,...							</p>
						</Link>
					</div>
        </div>
				<div className={classes.row}>
					<div className={classes.column}>
						<img className={classes.img} src={missionstatement} alt="curriculum" />
					</div>
					<div className={classes.column2}>
						<Link to='/missionstatement'><h2 className={classes.titletext}>Bernards Township Mission Statement</h2></Link>
						<Link to='/missionstatement'>
							<p className={classes.textlink}>
							We need to take political ideology out of operating the school district. This is
a non-partisan role that should help develop...							</p>
						</Link>
					</div>
        </div>
    </div>
	);
};

export default Issues;