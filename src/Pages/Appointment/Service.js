import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-500'>No slots Available.Try Another Day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div class="card-actions justify-center">
                    {/* <button
                        // onClick={() => setTreatment(service)}
                        // disabled={slots.length === 0}


                        class="">Book Appointment</button> */}
                    <label for="booking modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        class="btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;