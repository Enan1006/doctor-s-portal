import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';

const Banner = ({ date, setDate }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-14 my-14'>
            <div>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
            <div>
                <img className='mt-5 w-96 h-60' src={chair} alt="" />
            </div>
        </div>
    );
};

export default Banner;