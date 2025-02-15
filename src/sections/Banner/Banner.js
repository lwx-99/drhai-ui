import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';
import icon from '../../assets/footer/calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {

    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container h-full">
                        <div className="row h-full">
                            <div className="col-lg-6 h-full flex justify-center items-center">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Chuyên gia y khoa hàng đầu trong lĩnh vực cơ xương khớp</h1>
                                    <p className="text-lg">Chuyên gia hàng đầu về lĩnh vực phẫu thuật Chấn thương - Chỉnh hình và Khám, chữa bệnh Cơ-Xương-Khớp</p>

                                    <div className="banner-bottom flex items-center">
                                        <div className="theme-btn">
                                            <Link to="/gioi-thieu">TÌM HIỂU NGAY</Link>
                                        </div>

                                        <div className="banner-call ">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Hotline tư vấn</p>
                                                <h6>097 282 34 28</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 h-full flex justify-center items-center">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div>
                                    <div className='info-box'>
                                        {/*<div className="info-img">
                                            <img src={doctorImg} alt="doctor" />
                                        </div>*/}
                                        <div className='info-text'>
                                            <p><span>Đại tá, Phó Giáo sư, Tiến sỹ</span> Lưu Hồng Hải</p>
                                            <p className='title'>Bác sĩ Khoa chấn thương chỉnh hình Bệnh viện Trung ương Quân đội 108</p>
                                        </div>
                                    </div>  

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" />
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;