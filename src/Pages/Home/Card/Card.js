import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import contact from '../../../assets/icons/phone.svg';

const Card = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-5'>
            <CardInfo title='Opening Hours' bgClass='bg-indigo-600' description='Lorem Ipsum is simply dummy text of the pri' img={clock}></CardInfo>
            <CardInfo title='Visit our location' bgClass='bg-slate-700' description='Brooklyn, NY 10036, United States' img={location}></CardInfo>
            <CardInfo title='Contact us now' bgClass='bg-indigo-600' description='+000 123 456789' img={contact}></CardInfo>
        </div>
    );
};

export default Card;