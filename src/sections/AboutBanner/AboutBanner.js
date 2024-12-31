import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner_1.png'
import bannerTwo from '../../assets/about/banner/banner_2.png'
import pattern from '../../assets/banner/pattern.png'
import Breadcrumbs from '../../components/BreadCrumbs/Breadcrumbs';

const quatrinhdaotao = [
    { 
        year: "2015 - 2018",
        title: "Bác sĩ Cao cấp - Bệnh viện Trung ương Quân đội 108"
    },
    { 
        year: "2013",
        title: "Phó Giáo sư Y học - Học viện Quân Y"
    },
    { 
        year: "1995 - 2004",
        title: "Nghiên cứu sinh Hệ chính quy tại chức Học viện Quân Y, bảo vệ luận án Tiến sĩ Y học (2002). Là bác sĩ điều trị tại khoa Chấn thương Chỉnh hình"
    },
    { 
        year: "2003",
        title: "Cấp bằng Tiến sĩ Y học"
    },
    { 
        year: "2002",
        title: "Bảo vệ luận án tiến sĩ - Học viện Quân Y"
    },
    { 
        year: "1995",
        title: "Nghiên cứu sinh - Học viện Quân Y"
    },
    { 
        year: "1988",
        title: "Chuyên khoa Phẫu thuật tạo hình - vi phẫu thuật - Cục Quân Y"
    },
    { 
        year: "1986 - 1988",
        title: "Học viên bác sĩ chuyên khoa cấp I Ngoại chung - Học viện Quân Y"
    },
    { 
        year: "1975 - 1982",
        title: "Học viên Đại học Quân Y"
    },
    { 
        year: "1971 - 1974",
        title: "Y tá phục vụ chiến đấu"
    },
]

const kinhnghiem = [
    { 
        year: "Hiện tại",
        title: "Bác sĩ Chấn thương chỉnh hình - Bệnh viện Đa khoa Quốc tế Vinmec Hải Phòng"
    },
    { 
        year: "03/2022 - ",
        title: "Bác sĩ Chấn thương chỉnh hình - Bệnh viện Đa khoa Quốc tế Vinmec Times City"
    },
    { 
        year: "2020 - 02/2022",
        title: "Phó trưởng khoa Ngoại Tổng hợp - Bệnh viện Đa khoa Quốc tế Vinmec Hạ Long (nay là Đông Bắc)"
    },
    { 
        year: "2019 - 2020",
        title: "Trưởng khoa Ngoại Tổng hợp - Bệnh viện Đa khoa Quốc tế Vinmec Hạ Long (nay là Đông Bắc)"
    },
    { 
        year: "2009 - 2014",
        title: "Viện trưởng Viện Chấn thương chỉnh hình - Bệnh viện Trung ương Quân đội 108, Đảng Ủy viên Đảng bộ Bệnh viện Trung ương Quân đội 108, Ban Chấp hành Hội Chấn thương chỉnh hình Việt Nam"
    },
    { 
        year: "2008 - 2009",
        title: "Phó Viện trưởng Viện Chấn thương chỉnh hình kiêm Chủ nhiệm khoa Phẫu thuật khớp - Khoa Phẫu thuật khớp - Viện Chấn thương chỉnh hình, Bệnh viện TƯQĐ 108"
    },
    { 
        year: "2004 - 2009",
        title: "Chủ nhiệm khoa Chấn thương chỉnh hình - Viện Chấn thương chỉnh hình Bệnh viện TƯQĐ 108"
    },
    { 
        year: "1985 - 1995",
        title: "Bác sĩ Chấn thương chỉnh hình - Bệnh viện Trung ương Quân đội 108"
    },
    { 
        year: "1982 - 1985",
        title: "Bác sĩ bệnh xá Trưởng - Trường Hạ sĩ quan hóa học, Bệnh xá trưởng bệnh xá BTL Hóa học"
    },
]

const xuatban = [
    { 
        year: "01.",
        title: "Năm 2012: Đánh giá kết quả điều trị một số bài học kinh nghiệm qua đợt phẫu thuật nhân đạo thay khớp hang toàn phần của đoàn Operation Walk (Hoa Kỳ) tại Bệnh viện TƯQĐ 108 (Tạp chí Chấn thương chỉnh hình Việt Nam)"
    },
    { 
        year: "02.",
        title: "Năm 2012: Đánh giá kết quả điều trị nhiễm khuẩn khớp háng tại khoa Phẫu thuật khớp háng, Bệnh viện TƯQĐ 108 (Tạp chí Chấn thương chỉnh hình Việt Nam)"
    },
    { 
        year: "03.",
        title: "Năm 2011: Đánh giá kết quả ban đầu điều trị gãy liên mấu chuyển xương đùi ở người cao tuổi bằng phương pháp phẫu thuật thay khớp hang bán phần Bipolar (Kỷ yếu Hội nghị khoa học thường niên kết hợp CTCH VN lần thứ X và CTCH TP. HCM lần thứ XVIII)"
    },
    { 
        year: "04.",
        title: "Năm 2011: Đánh giá kết quả phẫu thuật thay khớp háng và khớp gối nhân tạo tại Bệnh viện Trung ương Quân đội 108 (Tạp chí Y Dược lâm sàng 108)"
    },
    { 
        year: "05.",
        title: "Năm 2007: Microsurgical remplantation – An analysis of 267 replantations in 13 year period at Central Military Hospital 108, Ha Noi, Viet Nam (Meeting book Asean Orthopedics Association 27 Viet Nam – Asean)"
    }
]

const giaithuong = [
    { 
        year: "25/11/2005",
        title: "Nhận Huân chương Chiến công hạng Nhất do Chủ tịch nước khen tặng"
    },
    { 
        year: "22/02/2008",
        title: "Nhận danh hiệu Thầy thuốc Ưu tú do Chủ tịch nước khen tặng"
    },
    { 
        year: "11/11/2013",
        title: "Nhận bằng khen Thành tích xuất sắc trong sự nghiệp Giáo dục Đào tạo do Bộ trưởng Bộ Quốc phòng khen tặng"
    },
]


const AboutBanner = () => {
    return (
        <section className='about-section pt-40'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container px-4 md:px-2">
                        <div className='breadcrumb'>
                            <Breadcrumbs />
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>Về chúng tôi</h2>
                                    <p className='text-justify'>Phó Giáo sư, Tiến sĩ, Bác sĩ Lưu Hồng Hải đã có 39 năm kinh nghiệm trong lĩnh vực chấn thương chỉnh hình.</p>
                                    <p className='text-justify'>Phó Giáo sư Hải nhận phong hàm Phó Giáo sư Y học tại Học viện Quân Y vào năm 2013. Ông từng đảm nhiệm nhiều trọng trách như Viện trưởng Viện Chấn thương chỉnh hình - Bệnh viện Trung ương Quân đội 108, Đảng ủy viên Đảng bộ - Bệnh viện Trung ương Quân đội 108, Ban Chấp hành Hội Chấn thương chỉnh hình Việt Nam.</p>
                                    <p className='text-justify'>Đền đáp cho những cống hiến cả đời của Phó Giáo sư Hải cho nền y học nước nhà, ông vinh dự nhận được Huân chương Chiến công hạng Nhất do Chủ tịch nước khen tặng vào năm 2005; Danh hiệu Thầy thuốc Ưu tú do Chủ tịch nước khen tặng vào năm 2008; Bằng khen Thành tích xuất sắc trong sự nghiệp Giáo dục Đào tạo do Bộ trưởng Bộ Quốc phòng khen tặng vào năm 2013.</p>
                                    <p className='text-justify'>Phó Giáo sư, Tiến sĩ, Bác sĩ Lưu Hồng Hải đã có 39 năm kinh nghiệm trong Hiện tại, Phó Giáo sư, Tiến sĩ, Bác sĩ Lưu Hồng Hải giữ chức vụ Bác sĩ Chấn thương chỉnh hình - Bệnh viện Đa khoa Quốc tế Vinmec Hải Phòng.</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner"/>
                                    <img src={bannerTwo} alt="about banner two"/>
                                {/*<img className='pattern' src={pattern} alt="about banner two"/>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container flex flex-col md:flex-row mt-10">
                        <div className='w-full md:w-1/2 p-3'>

                            <div className="accordian-area">
                                <div class="accordion" id="accordion1">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                            Quá trình đào tạo
                                        </button>
                                        </h2>
                                        <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion1">
                                            <div class="accordion-body">
                                                <ul>
                                                    {quatrinhdaotao.map( (daotao) =>  (
                                                            <li className='mb-4'>
                                                                •<p className='text-left ml-1'><span className='font-semibold'>{daotao.year}</span>: <span>{daotao.title}</span></p>
                                                            </li>
                                                        )           
                                                    )}
                                            </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='w-full md:w-1/2 p-3'>
                            
                            <div className="accordian-area">
                                <div class="accordion" id="accordion2">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Kinh nghiệm làm việc
                                        </button>
                                        </h2>
                                        <div id="collapse2" class="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#accordion2">
                                            <div class="accordion-body">
                                                <ul>
                                                    {kinhnghiem.map( (daotao) =>  (
                                                            <li className='mb-4'>
                                                                •<p className='text-left ml-1'><span className='font-semibold'>{daotao.year}</span>: <span>{daotao.title}</span></p>
                                                            </li>
                                                        )           
                                                    )}
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container flex flex-col md:flex-row">
                        <div className='w-full md:w-1/2 p-3'>

                            <div className="accordian-area">
                                <div class="accordion" id="accordion3">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Giải thưởng và ghi nhận
                                        </button>
                                        </h2>
                                        <div id="collapse3" class="accordion-collapse collapse show" aria-labelledby="heading3" data-bs-parent="#accordion3">
                                            <div class="accordion-body">
                                                <ul>
                                                    {giaithuong.map( (daotao) =>  (
                                                            <li className='mb-4'>
                                                                •<p className='text-left ml-1'><span className='font-semibold'>{daotao.year}</span>: <span>{daotao.title}</span></p>
                                                            </li>
                                                        )           
                                                    )}
                                            </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='w-full md:w-1/2 p-3'>
                            
                            <div className="accordian-area">
                                <div class="accordion" id="accordion4">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Sách, báo, công trình nghiên cứu
                                        </button>
                                        </h2>
                                        <div id="collapse4" class="accordion-collapse collapse show" aria-labelledby="heading4" data-bs-parent="#accordion4">
                                            <div class="accordion-body">
                                                <ul>
                                                    {xuatban.map( (daotao) =>  (
                                                            <li className='mb-4'>
                                                                •<p className='text-left ml-1'><span className='font-semibold'>{daotao.year}</span>: <span>{daotao.title}</span></p>
                                                            </li>
                                                        )           
                                                    )}
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;