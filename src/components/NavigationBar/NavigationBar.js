import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationBar.module.css'

import facebook from '../../image/facebook.png';

const NavigationBar = () => {
	return (

		<header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        Light {'&'} Nastro
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <NavLink to="/about" activeClassName={classes.active}>
						About Us
          </NavLink>
          <NavLink to="/Issues" activeClassName={classes.active}>
						Issues
          </NavLink>
          <NavLink to="/districtinformation" activeClassName={classes.active}>
						District Information
          </NavLink>
					<NavLink to="/factorstoconsider" activeClassName={classes.active}>
						Factors to Consider
          </NavLink>
					<NavLink to="/correctingincumbentsmisinformation" activeClassName={classes.active}>
						Correcting Incumbents Misinformation
          </NavLink>
          <NavLink to="/contact" activeClassName={classes.active}>
						Volunteer / Contact Us
          </NavLink>
          <NavLink to="/support" activeClassName={classes.active}>
						Support Us
          </NavLink>
					<a href="https://www.facebook.com/lightandnastro/" target="_blank" rel="noreferrer">
						<img src={facebook} className={classes.activeImg} alt="facebook" />
					</a>

        </ul>
      </nav>
    </header>



	);
}

export default NavigationBar;