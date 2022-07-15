import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const MakeAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(Response => Response.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='px-10 py-20'>
            <h4 className='text-center text-indigo-600 text-2xl mb-10'>You picked {format(date, 'PP')}.</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default MakeAppointment;