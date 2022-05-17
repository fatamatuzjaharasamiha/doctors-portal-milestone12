import React from 'react';
import './Exceptional.css'
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Exceptional = () => {
  return (
    <div className="hero min-h-screen mb-10 ">
      <div className="hero-content flex-col lg:flex-row gap-12 ">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div className='lg:w-80 '>
          <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on your terms</h1>
          <p className="py-6">Dental implants are biocompatible tooth restorations which are made to imitate the function of natural tooth roots. When you have a missing tooth, an implant can replace it and support a permanent crown, bridge or denture. Dental implants are the perfect alternative to traditional bridges and partial dentures, because they can function independent of the other teeth.</p>
         <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;