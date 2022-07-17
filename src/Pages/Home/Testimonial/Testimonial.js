import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, location, quote, image } = testimonial;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{quote}</p>
                <div className='flex items-center mt-5'>
                    <div>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary">
                                <img className='w-16 h-16' src={image} />
                            </div>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h4>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;