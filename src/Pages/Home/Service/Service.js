import React from 'react';

const Service = ({ service }) => {
    const { img, title, description } = service;
    return (
        <div className='p-5'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="pt-10">
                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;