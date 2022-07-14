import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const HomeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='mt-20 flex  justify-center items-center p-10 md:p-0'>
            <div className='flex-1 hidden md:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-2xl font-bold text-green-400'>Appointment</h2>
                <h1 class="text-5xl font-bold text-white">Exceptional Dental Care, on Your Terms</h1>
                <p class="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </section>
    );
};

export default HomeAppointment;