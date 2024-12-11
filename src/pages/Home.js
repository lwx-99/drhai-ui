import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
import Emergency from '../sections/Emergency/Emergency';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';
import ProductCollection from '../components/ProductCollection/ProductCollection';
import HomeProduct from '../components/HomeProduct/HomeProduct';
import HomeBlog from '../components/HomeBlog/HomeBlog';

const Home = ({categories}) => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Expert/>
            <Services/>
            <Emergency/>
            <HomeProduct />
            <HomeBlog/>
            {/*<Features />
            
            <Testimonial/>*/}
            {/*<Blogs/>*/}
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;