import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Destination from './Destination/Destination';

const Destinations = () => {
    const [destinations,setDestinations] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/alldestinations')
            .then(res=>res.json())
            .then(data=>setDestinations(data))
    },[])
    return (
        <section className="container text-center my-4">
            <h2 className="bg-light p-3 text-center mt-4">Our Destinations</h2>
            <hr />
            <Row className="g-4">
                {
                    destinations.length ? destinations.map(destination=><Destination destination={destination} key={destination._id }></Destination>)
                    : <div className="text-center p-5"> 
                            <Spinner animation="border" style={{width:"100px", height:"100px"}} variant="primary"  /> 
                    </div>
                }
            </Row>
        </section>
    );
};

export default Destinations;