import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Banner date={date} setDate={setDate} />
            <MakeAppointment date={date} setDate={setDate} />
        </div>
    );
};

export default Appointment;