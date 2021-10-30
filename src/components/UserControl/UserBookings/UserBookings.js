import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import SingleBooking from './SingleBooking/SingleBooking';

const UserBookings = () => {
    const {user} = useAuth();
    const [bookingList,setBookingList] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user/bookings',{
            method:"POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify({userEmail:user.email})
        })
        .then(res=>res.json())
        .then(data=>setBookingList(data))
    },[user.email])
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
                    const restBookingList = bookingList.filter(booking => booking._id !== id)
                    setBookingList(restBookingList);
                }
            })
        }
    }

    return (
        <div>
            <h2>My Booking List</h2>
            <div>
                {
                    bookingList.map(booking=><SingleBooking booking={booking} handleBookingCancle={handleBookingCancle} key={booking._id}></SingleBooking>)
                }
            </div>
        </div>
    );
};

export default UserBookings;