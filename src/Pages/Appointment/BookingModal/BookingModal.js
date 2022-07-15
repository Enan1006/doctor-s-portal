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
            {/* <label for="booking-modal" class="btn modal-button">open modal</label> */}

            <input type="checkbox" id="booking-modal" class="modal-toggle" />

            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-center text-indigo-600 text-lg">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center'>
                        <input type="text" value={format(date, 'PP')} disabled class="input mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" />
                        <select name='slot' class="select select-bordered mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your name" name='name' class="input mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" />
                        <input type="email" placeholder="Your Email" name='email' class="input mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" />
                        <input type="text" placeholder="Your Phone Number" name='number' class="input mt-4 w-full max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" />
                        <input type="submit" value="Submit" class="btn bg-indigo-600 text-white border-0 w-full mt-4 max-w-xs" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;