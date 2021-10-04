import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
  const [courses,setCourses] = useState([]);
    
    useEffect( ()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
      return (
        <div className='container'>
           <section className='bg-danger'>
               <div className='row'>
                 <div className="col-md-6 col-sm-12 text-white p-4">
                    <h1>Learn online from the leaders in business education</h1>
                    <p>Expand your business skills and engage with a global network of learners through our flexible, online courses. Wherever you are in your career—or the world—Harvard Business School Online can help you achieve your goals.</p>
                    <button className='top-btn'>Explore All Courses</button>
               </div>
               <div className="col-md-6 col-sm-12">
                  <img className='w-100' src="https://brave-kilby-d6117e.netlify.app/images/images.jpg" alt="" />
               </div>
               </div>
           </section>
           <section className='mt-5'>
               <h3>Choose a subject area:</h3>
               <div className='display mt-4'>
                   <button className='custom-btn'>Business Essentials</button>
                   <button className='custom-btn'>Leadership & Management</button>
                   <button className='custom-btn'>Enterpreneurship & Innovation</button>
                   <button className='custom-btn'>Strategy</button>
                   <button className='custom-btn'>Analytics</button>
                   <button className='custom-btn'>Finance & Account</button>
               </div>
           </section>
           <section className='mt-4'>
             <h3>Feautured Course:</h3>
              <div className='course-container row'>
                {
                 courses.map(course=><Course
                 key={course.id}
                course={course}
                 ></Course>)
                }
                 
              </div>
           </section>
        </div>
    );
};

export default Home;