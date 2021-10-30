import React from 'react';

const AdminBooking = (props) => {
    const {firstName, status, address, email, mobileNumber, _id} = props.booking;
    return (
        <div>
            
            <div>
                <p>name: {firstName} : {status} : {email} : {address}</p>
            </div>
            <button onClick={()=>props.handleBookingStatus(_id)}>{status}</button>
            <button onClick={()=>props.handleBookingCancle(_id)}>Cancel</button>
        </div>
    );
};

export default AdminBooking;