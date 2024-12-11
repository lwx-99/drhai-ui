import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';
import Breadcrumbs from '../../components/BreadCrumbs/Breadcrumbs';

const Contactus = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <div className="container pt-8">
                    <div className='breadcrumb'>
                        <Breadcrumbs />
                    </div>
                    <div className="text-center w-full text-4xl md:text-5xl font-bold text-secondary-600 px-2">
                        Liên Hệ
                    </div>
                    <div className="text-center mx-auto w-full md:w-3/5 mt-4 pb-16 px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>

                </div>

            </section>
            <section className='contact-form-area'>
                <ContactForm />
            </section>
            <Footer />
        </>
    );
};

export default Contactus;