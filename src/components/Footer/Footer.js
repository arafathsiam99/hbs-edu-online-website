import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container">
            <div className='bg-dark d-flex mt-4 p-4'>
            <div className="col-md-3 text-white">
                <h1>Subject Areas</h1>
                <p>Business Essentials</p>
                <p>Leadership & Management</p>
                <p>Analytics</p>
                <p>Entrepreneurship & Innovation</p>
                <p>Strategy</p>
                <p>Finance & Accounting</p>
                <p>Business & Society</p>
            </div>
            <div className="col-md-3 text-white">
                <h1>Quick Links</h1>
                <p>FAQs</p>
                <p>Contact Us</p>
                <p>Request Info</p>
                <p>Apply Now</p>
            </div>
            <div className="col-md-3 text-white">
                <h1>About</h1>
                <p>About Us</p>
                <p>Media Coverage</p>
                <p>Founding Donors</p>
                <p>Leadership Team</p>
                <p>Careers @ HBS Online</p>
            </div>
            <div className="col-md-2 text-white">
                <h1>Legal</h1>
                <p>Legal</p>
                <p>Policies</p>
            </div>
        </div>
        </div>
        
    );
};

export default Footer;