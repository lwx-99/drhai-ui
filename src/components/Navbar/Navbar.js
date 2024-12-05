import React, {useState, useEffect} from 'react'
import './Navbar.scss';
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
          window.scrollY > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
      }, [top]);

    const navbarItems = [
        {
            name: 'Trang Chủ',
            path: '/',
        },
        {
            name: 'Giới thiệu',
            path: '/gioi-thieu',
        },
        {
            name: 'Sản phẩm',
            path: '/san-pham',
        },
        {
            name: 'Bài Viết',
            path: '/bai-viet',
        },
        {
            name: 'Liên hệ',
            path: '/lien-he',
        }
    ];

    return (
        <div className={`main-nav ${!top && 'bg-white shadow-md py-1'}`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                    ) 
                                }
                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="theme-btn mb-2 mb-lg-0">
                                <Link to="/lien-he">LIÊN HỆ TƯ VẤN</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;