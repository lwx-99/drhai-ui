import React, {useState, useEffect} from 'react'
import './Navbar.scss';
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';

import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

export const MobileNavLinks = motion(styled.ul`
    ${tw`lg:hidden z-10 fixed top-0 right-0 text-left rounded-lg text-gray-900 bg-white h-screen overflow-visible p-6 pt-24`}
  `);

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

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

    useEffect(() => {
        if (showNavLinks) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      }, [showNavLinks])

    return (
        <div className={`main-nav ${!top && 'bg-white nav-shadow'}`}>
            <div className="container-nav">
                <nav className="navbar-main">
                    <div className="flex justify-between">
                        {/* Logo */}
                        <Link className="navbar-brand z-50" to="/">
                            <img src={logo} alt="logo" />
                        </Link>

                        <div className="navbar-desktop">
                            <ul className="navbar-nav mx-auto flex flex-row items-center justify-center mb-lg-0">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                    ) 
                                }
                            </ul>
                            <div className="theme-btn nav text-base mb-2 mb-lg-0">
                                <Link to="/lien-he">LIÊN HỆ TƯ VẤN</Link>
                            </div>
                        </div>

                        <div className="navbar-mobile flex items-center justify-between">
                            <MobileNavLinks onClick={toggleNavbar} initial={{ x: "50%", display: "none"}} animate={animation} transition={{ type: "spring", bounce: 0, duration: 1}} className="navbar-nav mx-auto flex-col items-center justify-center shadow-2xl">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className="nav-item mb-3">
                                        <Link className="nav-link text-right text-lg pr-2" to={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                    ) 
                                }
                                <div className="theme-btn text-base flex justify-end mt-8">
                                    <Link to="/lien-he">LIÊN HỆ TƯ VẤN</Link>
                                </div>
                            </MobileNavLinks>
                            <button onClick={toggleNavbar} className={`toggle-btn lg:hidden z-20 focus:outline-none hocus:text-primary-700 transition duration-300 ${showNavLinks ? "open" : "closed"}`}>
                                    {showNavLinks ? <CloseIcon tw="w-16 h-16" /> : <MenuIcon tw="w-16 h-16" />}
                            </button>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;