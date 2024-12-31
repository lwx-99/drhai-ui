import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
    return (
        <section className='service-section pt-50 pb-50'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="col-lg-6 col-sm-6 mb-5">
                        <div className="text-left w-full leading-6 text-2xl md:text-4xl font-bold text-secondary-600">
                            Hơn 30 năm kinh nghiệm trong lĩnh vực Cơ - Xương - Khớp
                        </div>
                    </div>
                    <div className="">
                        <p className='service-title-text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

            {/*<div className="services-link text-center">
                <Link to='/'>
                    View all service list
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>*/}
        </section>
    );
};

export default Services;