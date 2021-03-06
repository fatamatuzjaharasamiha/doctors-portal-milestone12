import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Footer from './Footer';
import Form from './Form';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;