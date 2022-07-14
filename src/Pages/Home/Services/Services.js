import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            "_id": 1,
            "img": fluoride,
            "title": "Fluoride Treatment",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "_id": 2,
            "img": cavity,
            "title": "Cavity Filling",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "_id": 3,
            "img": whitening,
            "title": "Teeth Whitening",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='pt-20 px-10'>
            <h3 className='text-indigo-600 text-center font-bold text-2xl'>OUR SERVICES</h3>
            <h2 className='text-slate-800 text-center font-semibold text-4xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;