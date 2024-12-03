import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import email from '../../assets/footer/email.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'Giới thiệu',
            'link' : '/'
        },
        {
            'name' : 'Sản phẩm',
            'link' : '/'
        },
        {
            'name' : 'Dịch Vụ',
            'link' : '/'
        },
        {
            'name' : 'Kiến thức',
            'link' : '/'
        },
        {
            'name' : 'Liên hệ',
            'link' : '/'
        }
    ];

    const footerContacts = [
        {
            'title': 'Số điện thoại',
            'info': '098 123 4567',
            'icon': call
        },
        {
            'title': 'Email',
            'info': 'lienhe@drhai.vn',
            'icon': email
        },
        {
            'title': 'Trụ sở chính',
            'info': 'Số 1 Tôn Thất Tùng, Q. Đống Đa, Hà Nội ',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p className="short-des">DRHAI Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <div className="social-logo">
                            <p>Theo dõi chúng tôi trên</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Liên Kết</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Địa chỉ và Liên hệ</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Copyright 2024. Bản quyền thuộc về DRHAI.</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Điều khoản sử dụng</Link></li>
                            <li><Link to='/'>Chính sách bảo mật</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;