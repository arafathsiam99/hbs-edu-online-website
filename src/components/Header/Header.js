import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/hbs_online_logo.svg';

const Header = () => {
    return (
        <div className='d-flex my-4 container justify-content-between'>
            <img className='img-fluid me-5' src={logo} alt="" />
            <div className="d-flex">
                <NavLink
                to="/home" className='nav-link'
                activeStyle=
                {{
                  fontWeight: "bold",
                  color: "#f70d1a"
                    }}  >
                Home
            </NavLink>
            <NavLink
                to="/aboutus" className='nav-link'
                activeStyle=
                {{
                  fontWeight: "bold",
                  color: "#f70d1a"
                    }}  >
                About Us
            </NavLink>
            <NavLink
                to="/services" className='nav-link'
                activeStyle=
                {{
                  fontWeight: "bold",
                  color: "#f70d1a"
                    }}  >
                Services
            </NavLink>
            <NavLink
                to="/moreinfo" className='nav-link'
                activeStyle=
                {{
                  fontWeight: "bold",
                  color: "#f70d1a"
                    }}  >
                More Info
            </NavLink>
            </div>
        </div>
    );
};

export default Header;