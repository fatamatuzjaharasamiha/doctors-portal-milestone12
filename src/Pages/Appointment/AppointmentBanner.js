import React from 'react';
import chair from '../../assets/images/appoint.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen bg-teal-100">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} className=" max-w-sm rounded-lg shadow-xl border-double border-4 border-indigo-600" alt='Dentist Chair' />
                <div className=''>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onDayClick={setDate}
                    />
                    {/* <p>You have selected : {format(date, 'PP')}</p> */}
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;