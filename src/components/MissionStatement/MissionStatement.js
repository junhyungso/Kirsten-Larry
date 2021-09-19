import React, { useEffect } from 'react';
import classes from './MissionStatement.module.css';

import missionstatement from '../../image/missionstatement.png';

const Missionstatement = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	return (
    <div>
        <div>
            <h1>
                <b><u>Bernards Township Mission Statement</u></b>
            </h1>
        </div>
        <div>
            <img className={classes.image} src={missionstatement} alt="" />
        </div>
				<div className={classes.text}>
				We need to take political ideology out of operating the school district. This is
a non-partisan role that should help develop a mission statement for the
community and to defend that against intrusions from political motivations.
That may mean challenging the mandates by sitting State, County and Local
leadership and being a leader in bringing proactive solutions to the table.
				</div>
    </div>
	);
};

export default Missionstatement;