import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='container'>
            <div className='custom-bg'>
                <h1>About</h1>
                <p>HBS Online offers a unique and highly engaging way to learn vital business concepts, enabling committed learners to transform their careers, their organizations, and their lives.</p>
            </div>
            <div className=''>
                <div>
                    <h1 className='custom-head'>Our Vision</h1>
                   <p> Harvard Business School Online launched as HBX in 2014 to deepen the School’s impact and broaden its reach, all while staying true to the HBS mission: to educate leaders who make a difference in the world. The nuance? Now we could reach those leaders wherever they are—in the world, in their careers, and in their lives.Since, HBS Online has educated 100,000-plus learners from more than 175 countries via our innovative online platform.We achieve this through a learning model that is active, social, and case-based. Meaning, you       immerse yourself in real-world challenges facing seasoned business leaders and discuss and  debate solutions with peers from around the world—all while learning from renowned Harvard Business School faculty. It’s an online business education like no other.</p>
                </div>
                <div>
                    <h1 className='custom-head'>Our History</h1>
                    <p>
                        A lot has happened in just a few years. Here’s a look at some of the highlights:
                          
                        <ul>
                            <li> 2014: Our course platform launches, along with our first two programs: CORe and  Disruptive  Strategy</li>
                            <li>2015: CORe becomes the program Harvard Business School offers to incoming students to  prepare for the MBA classroom</li>
                            <li>2016: Our first-ever Connext conference takes place, bringing participants to the HBS  campus  for a day of networking, learning, and inspiration</li>
                            <li>2018: Community launches to provide our online learners with the chance to connect offline in  more than 30 regions around the world</li>
                            <li>  2019: HBX rebrands to Harvard Business School Online and celebrates its fifth birthday</li>
                            <li>2020: HBS Online surpasses 100,000 learners</li>
                        </ul> </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;