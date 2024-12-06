import React, { useState, useEffect } from "react";
import axios from 'axios';
import MoonLoader from "react-spinners/MoonLoader";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

import Navbar from '../Navbar/Navbar';
import PageTitle from '../PageTitle/PageTitle';
import Footer from '../../sections/Footer/Footer';
import BlogCard from '../BlogCard/BlogCard';
import BlogData from '../../sections/Blogs/BlogData';
import { Link } from "react-router-dom";

const Meta = styled.a`
  ${tw` no-underline cursor-pointer bg-transparent p-2 rounded-lg text-primary-700 border border-primary-700 font-medium text-base flex items-center leading-none last:mr-0 inline-block hover:bg-primary-700 hover:text-white hover:border-primary-700`}
  
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`
const ButtonContainer =  styled.div`${tw `flex justify-center items-center w-full`}`;
const LoadMoreButton =  styled.button`${tw `mt-8 mx-auto font-medium text-lg text-white px-4 py-2 rounded-lg border border-primary-700 bg-primary-700 hover:bg-secondary-600`}`;


const override = {
    display: "block",
    margin: "250px auto",
    borderColor: "#3b82f6",
  };

const heading = {
    title:'Bài Viết',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
}

const HomeBlog = () => {

    const [tabIndex, setTabIndex] = useState(0);
  
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    const [visible, setVisible] = useState(3);
  
    const [activeIndex, setActiveIndex] = useState(-1)
  
    const onLoadMoreClick = () => {
      setVisible(v => v + 3);
    };
  
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_BACKEND}/api/bai-viets?populate=*&pagination[limit]=${visible}&sort[0]=createdAt:desc`)
        .then(({ data }) => {setPosts(data.data); setIsLoading(false);})
        .catch((error) => setError(error));
      
    }, [visible]);
    
    const handleClick = (value) =>{
      setActiveIndex(value)   
    }
    
    return (
        <>
            <div className="pt-16 container" >
              <div className='flex flex-col justify-start mb-12'>
                <div className='title-container mb-8 flex justify-between w-full'>
                    <h2 className='text-4xl md:text-5xl font-bold'>Bài Viết</h2>
                    <div className="theme-btn">
                        <Link to="/bai-viet">Xem Tất Cả</Link>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <p className='w-full text-left text-secondary-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              { !isLoading ? 
                  <section className='pb-70' data-aos="fade-up" data-aos-duration="2000">
                      <div className="container ">
                          <div className="row">
                              {
                                  posts.slice(0, visible).map((post, index) => (
                                  <BlogCard key={index} post={post}/>
                              ))}
                          </div>
                      </div>
                      <ButtonContainer>
                        <LoadMoreButton onClick={onLoadMoreClick}>Xem Thêm</LoadMoreButton>
                      </ButtonContainer>
                  </section>
                  :
                  <MoonLoader 
                  cssOverride={override}
                  color="#4cb269"
                  loading={true}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  />
              }
            </div>
        </>
    );
};

export default HomeBlog;