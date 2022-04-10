import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='text-center mt-4 bg-primary'>
            <p className='text-white py-5'><small>copyright&copy;{year}</small></p>
        </footer>
    );
};

export default Footer;