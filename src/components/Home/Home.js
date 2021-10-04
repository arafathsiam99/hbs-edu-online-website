import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Home.css';

const Home = (props) => {
  const[course,setCourse]=useState([]);

  useEffect( ()=>{
    fetch('/fakedata.json')
    .then(res=>res.json())
    .then(data=>setCourse(data));
  },[])
      return (
        <div className='container'>
           <section className='bg-danger'>
               <div className='d-flex'>
                 <div className="col-md-6 text-white ">
                    <h1>Learn online from the leaders in business education</h1>
                    <p>Expand your business skills and engage with a global network of learners through our flexible, online courses. Wherever you are in your career—or the world—Harvard Business School Online can help you achieve your goals.</p>
                    <button className='justify-content-center top-btn'>Explore All Courses</button>
               </div>
               <div className="col-md-6">
                  <img className='custom-img' src="https://brave-kilby-d6117e.netlify.app/images/images.jpg" alt="" />
               </div>
               </div>
           </section>
           <section className='mt-5'>
               <h3>Choose a subject area:</h3>
               <div className='display'>
                   <button className='custom-btn'>Business Essentials</button>
                   <button className='custom-btn'>Leadership & Management</button>
                   <button className='custom-btn'>Enterpreneurship & Innovation</button>
                   <button className='custom-btn'>Strategy</button>
                   <button className='custom-btn'>Analytics</button>
                   <button className='custom-btn'>Finance & Account</button>
               </div>
           </section>
           <section className='mt-4'>
              <div>
                 <CardGroup>
                <Card>
                  <Card.Img variant="top" src={props.picture} />
                  <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                    {props.balance}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
              </div>
           </section>
        </div>
    );
};

export default Home;