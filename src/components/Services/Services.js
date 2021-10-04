import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    const[services,setServices]=useState([]);

    useEffect(()=>{
        fetch('/fakedata1.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container">
            <div className='text-center row gy-4'>
            {
                services.map(service=> <div className='col-md-4 '>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={service.picture}/>
            <Card.Body>
              <Card.Title>Name:{service.name}</Card.Title>
              <Card.Text>
                Price:{service.price}
              </Card.Text>
              <Button variant="danger">Buy Course</Button>
            </Card.Body>
            </Card>
        </div>)
            }
        </div>
        </div>
    );
};

export default Services;