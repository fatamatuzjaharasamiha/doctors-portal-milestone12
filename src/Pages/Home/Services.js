import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Feeling',
            description: 'As the decay gets larger, it may cause signs and symptoms such as: Toothache, spontaneous pain or pain that occurs without any apparent cause. Tooth sensitivity. Mild to sharp pain when eating or drinking something sweet, hot or cold.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Having your teeth whitened in-office will cost approximately $600, and while this is significantly more money than the cost of take-home kits or other teeth whitening products, such as gels, gums, or whitening toothpastes',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary text-xl font-bold '>OUR SERVICES</h2>
                <h3 className='text-4xl'>Services we provide</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;