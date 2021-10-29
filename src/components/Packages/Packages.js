import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import HolidayPack from './HolidayPack/HolidayPack';

const Packages = () => {
    const [packages,setPackages] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/allpackages')
            .then(res=>res.json())
            .then(data=>setPackages(data))
    },[])
    return (
        <div className="container my-4">
            <h2 className=" text-center mt-4">Current Packages</h2>
            <hr />
            <Row className="g-4 mt-4">
                {
                    packages.map(holidayPack=><HolidayPack holidayPack={holidayPack} key={holidayPack._id}></HolidayPack>)
                }
            </Row>
        </div>
    );
};

export default Packages;