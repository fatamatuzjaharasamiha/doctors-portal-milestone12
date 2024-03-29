import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-blue-100 shadow-xl mt-5 font-bold">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-500'>No slots Available.Try Another Day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div className="card-actions justify-center">
                    {/* <button
                        // onClick={() => setTreatment(service)}
                        // disabled={slots.length === 0}


                        className="">Book Appointment</button> */}
                    <label
                        for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-sm btn-secondary text-white uppercase">Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;