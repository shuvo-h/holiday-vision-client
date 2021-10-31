import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import HolidayPack from './HolidayPack/HolidayPack';

const Packages = () => {
    const [packages,setPackages] = useState([]);
    
    useEffect(()=>{
        fetch('https://fathomless-oasis-64789.herokuapp.com/allpackages')
            .then(res=>res.json())
            .then(data=>setPackages(data))
    },[])
    return (
        <div className="container my-4">
            <h2 className="bg-light p-3 text-center mt-4">Current Packages</h2>
            <hr />
            <Row className="bg-light g-1 mt-4">
                {
                    packages.length ?  packages.map(holidayPack=><HolidayPack holidayPack={holidayPack} key={holidayPack._id}></HolidayPack>) 
                    : <div className="text-center p-5"> 
                            <Spinner animation="border" style={{width:"100px", height:"100px"}} variant="primary"  /> 
                    </div>
                }
            </Row>
        </div>
    );
};

export default Packages;