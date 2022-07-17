import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        console.log(name, email, number, slot);
        setTreatment(null)
    }
    return (
        <div>
            {/* <label htmlFor="booking-modal" className="btn modal-button">open modal</label> */}

            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-indigo-600 text-lg">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center'>
                        <input type="text" value={format(date, 'PP')} disabled className="input mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" />
                        <select name='slot' className="select select-bordered mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your name" name='name' className="input mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" />
                        <input type="email" placeholder="Your Email" name='email' className="input mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" />
                        <input type="text" placeholder="Your Phone Number" name='number' className="input mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" />
                        <input type="submit" value="Submit" className="btn bg-indigo-600 text-white border-0 w-full mt-4 max-w-xs" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;