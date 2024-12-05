import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.6969712017844!2d105.8299459444295!3d21.003000697886492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7e0d67debd%3A0x67c85fb32b25828!2zMSBUw7RuIFRo4bqldCBUw7luZywgS2jGsMahbmcgVGjGsOG7o25nLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e1!3m2!1sen!2s!4v1733227946547!5m2!1sen!2s"

    return (
        <section className='appointment-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Số 1 Tôn Thất Tùng, Q. Đống Đa, Hà Nội</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="LIÊN HỆ TƯ VẤN"
                            title="Giải đáp đến từ chuyên gia"
                            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual"/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;