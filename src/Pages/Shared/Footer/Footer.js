import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='text-center my-4'>
            <p><small>copyright&copy;{year}</small></p>
        </footer>
    );
};

export default Footer;