import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminBooking from './AdminBooking/AdminBooking';

const ManageBooking = () => {
    const [allBookings,setAllBookings] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-oasis-64789.herokuapp.com/all-bookings')
            .then(res=>res.json())
            .then(data=>setAllBookings(data))
    },[])
    
    // Booking status changing function 
    const handleBookingStatus = (id) =>{
        fetch(`https://fathomless-oasis-64789.herokuapp.com/booking/updateStatus/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({status:"Approved"})
        })
          .then(res=>res.json())
          .then(data=>{
              if (data.modifiedCount > 0) {
                  alert("Status update successfully!");
                  window.location.reload();
              }
          })
      }

      const handleBookingCancle = (id) =>{
        const confirmation = window.confirm("Are you sure to cancel this booking?")
        if (confirmation) {
            fetch(`https://fathomless-oasis-64789.herokuapp.com/user/booking/remove`,{
                method:"DELETE",
                headers:{
                    'content-type': "application/json"
                },
                body: JSON.stringify({id})
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount > 0) {
                    alert("Booking has been cancelled successfully.")
                    const restBookingList = allBookings.filter(booking => booking._id !== id)
                    setAllBookings(restBookingList);
                }
            })
        }
    }

    return (
        <div className="manage-container container my-4">
            <h2  className=" text-center mb-4">Manage all booking</h2>
            <Row className="text-center">
                <Col md={5}><strong>User Information</strong></Col>
                <Col md={5}><strong>Booking Information</strong></Col>
                <Col md={2}><strong>Authority Power</strong></Col>
            <hr />
            </Row>
            <div>
                {
                    allBookings.map(booking=><AdminBooking handleBookingStatus={handleBookingStatus} handleBookingCancle={handleBookingCancle}  booking={booking} key={booking._id}></AdminBooking>)
                }
            </div>
        </div>
    );
};

export default ManageBooking;