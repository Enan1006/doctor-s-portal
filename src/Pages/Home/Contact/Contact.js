import React from 'react';
import background from '../../../assets/images/appointment.png'

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div style={{ background: `url(${background})` }} className='mt-24 pb-24'>
            <h3 className='text-indigo-400 text-center font-bold text-2xl pt-12'>Contact Us</h3>
            <h2 className='text-white text-center font-semibold text-4xl'>Stay connected with us</h2>
            <div className='md:w-1/2 w-5/6 mx-auto mt-12'>
                <form onSubmit={handleSubmit} >
                    <input className='py-3 pl-4 w-full mt-5 rounded-lg focus:border-green-400  focus:outline-indigo-500 mx-auto' type="email" name="email" id="" placeholder='Email Address' />
                    <br />
                    <input className='py-3 pl-4  w-full mt-5 rounded-lg focus:border-green-400  focus:outline-indigo-500 mx-auto' type="text" name="subject" id="" placeholder='Subject' />
                    <br />
                    <textarea className='py-3 pl-4 w-full mt-5 rounded-lg focus:border-green-400  focus:outline-indigo-500 mx-auto' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                </form>
            </div>
        </div>
    );
};

export default Contact;