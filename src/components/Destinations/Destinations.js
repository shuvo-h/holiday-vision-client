import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Destination from './Destination/Destination';

const Destinations = () => {
    const [destinations,setDestinations] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/alldestinations')
            .then(res=>res.json())
            .then(data=>setDestinations(data))
    },[])
    return (
        <section className="container text-center">
            <h2>Our Destinations</h2>
            <hr />
            <Row>
                {
                    destinations.map(destination=><Destination destination={destination} key={destination._id }></Destination>)
                }
            </Row>
        </section>
    );
};

export default Destinations;