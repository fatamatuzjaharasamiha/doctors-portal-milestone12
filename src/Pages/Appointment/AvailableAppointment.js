import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from '../Appointment/BookingModal'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
const AvailableAppointment = ({ date }) => {
    console.log(date)
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading,refetch } = useQuery(['available',formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    /* useEffect(()=>{
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[formattedDate])
    */
    return (
        <div className='py-6'>
            <h4 className="text-2xl text-secondary text-center font-bold">  Available appointment on :{format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    refetch={refetch}
                    setTreatment={setTreatment}></BookingModal>
            }
        </div>

    );
};

export default AvailableAppointment;