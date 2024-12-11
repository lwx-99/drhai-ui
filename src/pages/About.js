import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import Faq from '../sections/Faq/Faq';
import Priority from '../sections/Priority/Priority';
import VidCardSlide from '../sections/VidCardSlide/VidCardSlide';
import Team from '../sections/Team/Team';
import Footer from '../sections/Footer/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <Priority />
            <VidCardSlide />
            {/*<Team />*/}
            <Faq />
            <Footer />
        </>
    );
};

export default About;