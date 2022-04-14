import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword, useUpdateProfile
} from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate= useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        alert('Your Profile Updated');
        navigate('/home');

    }


    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Type Your Name'/>
                
                <input type="email" name='email' id='' placeholder='Your Email' required/>
                
                <input type="password" name="password" id="" placeholder='Your password' required/>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary ps-2': 'text-danger ps-2'} htmlFor="terms">Accept Our Terms and Conditions</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-info d-block mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;