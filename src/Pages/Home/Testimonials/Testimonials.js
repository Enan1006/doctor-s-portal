import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonials = [
        {
            "_id": 1,
            "name": "Winson Herry",
            "location": "California",
            "image": people1,
            "quote": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            "_id": 2,
            "name": "Dominik Lewin",
            "location": "Assex",
            "image": people2,
            "quote": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            "_id": 3,
            "name": "Harry Winks",
            "location": "Brentford",
            "image": people3,
            "quote": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <div className='pt-32 px-10'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-indigo-600 font-bold text-2xl'>Testimonial</h3>
                    <h2 className='text-slate-800 font-semibold text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 md:w-48  md:h-36 h-16 ' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5  mt-10'>
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    >
                    </Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;