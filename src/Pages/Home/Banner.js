import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your new Smile starts here!</h1>
          <p className="py-6 mr-12 text-xl">"At MY SMILE DOCTORS, we endeavour to help our patients achieve optimal oral health with every visit. Our main aim at MY SMILE DOCTORS Sydney Parramatta is to ensure that you receive the best treatment from us at your comfort. We look forward to handling our patients with care so that they are no more afraid of dental checkups and dental treatments."</p>
          <PrimaryButton>Get Starts</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;