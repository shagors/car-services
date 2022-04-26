import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'Salam',
    //     email: 'salam@gmail.com',
    //     address: 'tajmohol',
    //     phone: '0177777111'
    // });


    // const handleAddressChange = event => {
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://frozen-temple-47815.herokuapp.com/order', order)
        .then(res => {
            const {data} = res;
            if(data.insertedId){
                toast('Your Order is booked!!!!');
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name='name' placeholder='name' value={user?.displayName} required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" name='email' placeholder='email' value={user?.email} required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="text" name='service' placeholder='service' value={service.name} required readOnly/>
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' autoComplete='off'  required/>
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required/>
                <br />
                <input className='btn btn-primary' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default Checkout;