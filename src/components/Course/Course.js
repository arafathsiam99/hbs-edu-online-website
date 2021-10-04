import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import './Course.css';


const Course = (props) => {
    const{name,picture,price}=props.course;
    return (
        <div className='d-flex col-md-3 container'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture}/>
            <Card.Body>
              <Card.Title>Name:{name}</Card.Title>
              <Card.Text>
                Price:{price}
              </Card.Text>
              <Button variant="danger">Buy Course</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Course;