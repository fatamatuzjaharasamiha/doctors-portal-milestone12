import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle='Openning Hours' bgClass='bg-gradient-to-r from-green-200 to-blue-500' img={clock}></InfoCard>
            <InfoCard cardTitle='Our Locations' bgClass='bg-success' img={location}></InfoCard>
            <InfoCard cardTitle='Contact us' bgClass='bg-gradient-to-r from-cyan-500 to-blue-500' img={phone}></InfoCard>
        </div>
    );
};

export default Info;