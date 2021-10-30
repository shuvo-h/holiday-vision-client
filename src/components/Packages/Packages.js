import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import HolidayPack from './HolidayPack/HolidayPack';

const Packages = () => {
    const [packages,setPackages] = useState([]);
    console.log(packages);
    useEffect(()=>{
        fetch('http://localhost:5000/allpackages')
            .then(res=>res.json())
            .then(data=>setPackages(data))
    },[])
    return (
        <div className="container my-4">
            <h2 className="bg-light p-3 text-center mt-4">Current Packages</h2>
            <hr />
            <Row className="bg-light g-1 mt-4">
                {
                    packages.length ?  packages.map(holidayPack=><HolidayPack holidayPack={holidayPack} key={holidayPack._id}></HolidayPack>) : <Spinner animation="border" size={100} variant="primary" />
                }
            </Row>
        </div>
    );
};

export default Packages;