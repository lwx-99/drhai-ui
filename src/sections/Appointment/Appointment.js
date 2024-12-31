import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4418.067341352872!2d105.8638455!3d21.010199099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0067d49c1b%3A0x39ba94cade72ed64!2sS%E1%BA%A3nh%20T1%20-%20Sun%20Grand%20City%20Ancora!5e1!3m2!1sen!2s!4v1735625969409!5m2!1sen!2s"

    return (
        <section className='appointment-section pt-100 pb-70'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Tòa T1, Số 3 Lương Yên, P. Bạch Đằng, Q. Hai Bà Trưng, Hà Nội</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="LIÊN HỆ TƯ VẤN"
                            title="Giải đáp đến từ chuyên gia"
                            description="Vui lòng để lại câu hỏi và SĐT của bạn, đội ngũ tư vấn viên của chúng tôi sẽ tổng hợp và gửi câu hỏi trực tiếp tới Bác sĩ Hải. Xin cảm ơn."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;