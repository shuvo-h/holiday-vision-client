import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminBooking from './AdminBooking/AdminBooking';

const ManageBooking = () => {
    const [allBookings,setAllBookings] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all-bookings')
            .then(res=>res.json())
            .then(data=>setAllBookings(data))
    },[])
    
    // Booking status changing function 
    const handleBookingStatus = (id) =>{
        fetch(`http://localhost:5000/booking/updateStatus/${id}`,{
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
              }
          })
      }

      const handleBookingCancle = (id) =>{
        const confirmation = window.confirm("Are you sure to cancel this booking?")
        if (confirmation) {
            fetch(`http://localhost:5000/user/booking/remove`,{
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
        <div>
            <h2>Manage all booking</h2>
            <div>
                {
                    allBookings.map(booking=><AdminBooking handleBookingStatus={handleBookingStatus} handleBookingCancle={handleBookingCancle}  booking={booking} key={booking._id}></AdminBooking>)
                }
            </div>
        </div>
    );
};

export default ManageBooking;