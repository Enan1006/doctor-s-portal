import React from 'react';

const Service = ({ service }) => {
    const { img, title, description } = service;
    return (
        <div className='p-5'>
            <div class="card bg-base-100 shadow-xl">
                <figure class="pt-10">
                    <img src={service.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;