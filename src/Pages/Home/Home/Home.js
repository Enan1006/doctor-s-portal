import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Contact from '../Contact/Contact';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Card />
            <Services />
            <Intro />
            <HomeAppointment />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;