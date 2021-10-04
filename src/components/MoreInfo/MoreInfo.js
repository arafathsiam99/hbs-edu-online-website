import React from 'react';
import './MoreInfo.css'

const MoreInfo = () => {
    return (
        <div className='container'>
            <div className='custom-bg'>
                <h1>More Info</h1>
                <p>Harvard Business School Online offers a unique and highly engaging way to learn vital business concepts. Wherever you are in your career—or the world—we provide educational experiences that can help you achieve your personal and professional goals.</p>
            </div>
            <div className='d-flex'>
                <div className='col-md-4'>
                <h3 className='custom-head'>Learning Experience</h3>
                <p>Our programs are designed to bring the Harvard Business School classroom to you. Find out how.</p>
                </div>
                <div className='col-md-4'>
                <h3 className='custom-head'>Certificates, Credentials & Credits</h3>
                <p>We offer multiple ways to learn vital business concepts. Discover which option is best for you.</p>
                </div>
                <div className='col-md-4'>
                <h3 className='custom-head'>Learning Tracks</h3>
                <p>Gain deeper insights and expertise with this advanced certificate.</p>
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;