import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SingleBooking = (props) => {
    const [bookedPackage,setBookedPackage]= useState({});
    const {firstName, status, address, booking_pkg_id, _id} = props.booking;
    useEffect(()=>{
        fetch(`http://localhost:5000/package/${booking_pkg_id}`)
        .then(res=>res.json())
        .then(data=>{
            setBookedPackage(data);
        })
    },[booking_pkg_id])
   
    return (
        <div>
             {bookedPackage.pkg_title} :  
             <button onClick={()=>props.handleBookingCancle(_id)}>Cancel</button>
        </div>
    );
};

export default SingleBooking;