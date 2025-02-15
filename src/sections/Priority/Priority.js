import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section mt-16'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                subTitle="Chất lượng hàng đầu" 
                                title="Bảo vệ sức khỏe xương khớp của bạn"
                                description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                            />

                            <div className="theme-btn">
                                <Link to='/'>Liên hệ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;