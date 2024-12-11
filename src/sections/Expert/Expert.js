import React from 'react';
import { Link } from 'react-router-dom';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    return (
        <section className='expert-section mt-12'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text pr-0 md:pr-6">
                            <SectionTitle 
                                subTitle="Phó giáo sư, Tiến sĩ, Bác sĩ y khoa, Bác sĩ"
                                title="Lưu Hồng Hải"
                                description="Phó Giáo sư, Tiến sĩ, Bác sĩ Lưu Hồng Hải đã có 39 năm kinh nghiệm trong lĩnh vực chấn thương chỉnh hình. Giáo sư Hải nhận phong hàm Phó Giáo sư Y học tại Học viện Quân Y vào năm 2013. Ông từng đảm nhiệm nhiều trọng trách như Viện trưởng Viện Chấn thương chỉnh hình - Bệnh viện Trung ương Quân đội 108, Đảng ủy viên Đảng bộ - Bệnh viện Trung ương Quân đội 108, Ban Chấp hành Hội Chấn thương chỉnh hình Việt Nam. "
                            />
                            <div className='text-secondary-600 font-semibold mb-3 text-lg'>Giải thưởng và ghi nhận:</div>

                            <ul>
                                <li>
                                    25/11/2005: Nhận Huân chương Chiến công hạng Nhất do Chủ tịch nước khen tặng
                                </li>
                                <li>
                                    22/02/2008: Nhận danh hiệu Thầy thuốc Ưu tú do Chủ tịch nước khen tặng
                                </li>
                                <li>
                                    11/11/2013: Nhận bằng khen Thành tích xuất sắc trong sự nghiệp Giáo dục Đào tạo do Bộ trưởng Bộ Quốc phòng khen tặng
                                </li>
                            </ul>

                            <button className='theme-btn mt-3'>
                                <Link to="/gioi-thieu">
                                    Xem tiểu sử →
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" className='rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;