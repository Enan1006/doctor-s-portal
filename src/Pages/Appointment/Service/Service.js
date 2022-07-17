import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card shadow-xl">

                <div className="card-body">
                    <h2 className="card-title text-indigo-600">{name}</h2>
                    <p>
                        {slots.length > 0 ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-500'>No slot available</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? "slots" : "slot"} available</p>
                    <div className="card-actions justify-center">
                        <label htmlFor="booking-modal" disabled={slots.length == 0} onClick={() => setTreatment(service)} className="btn bg-indigo-600 text-white border-0 mt-5">Book Appontment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;