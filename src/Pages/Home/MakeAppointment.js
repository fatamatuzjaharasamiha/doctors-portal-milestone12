import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
import { Link } from 'react-router-dom';
const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{
            background:`url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-2'>Make an appointment today</h2>
                <p className='text-white py-4'>Both doctor's appointment and doctor appointment are acceptable for describing a medical visit. In the first case the 's, instead of showing possession, is actually showing association; appointments of this nature are associated with doctors. In the latter case, the noun doctor is being used adjectivally to describe the type of appointment.</p>
                <PrimaryButton><Link to='/appointment'>Get started</Link>
                    </PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;