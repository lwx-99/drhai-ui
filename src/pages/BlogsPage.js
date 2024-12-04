import React, { useState, useEffect } from "react";
import axios from 'axios';
import MoonLoader from "react-spinners/MoonLoader";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../sections/Footer/Footer';
import BlogCard from '../components/BlogCard/BlogCard';
import BlogData from '../sections/Blogs/BlogData';

import Breadcrumbs from "../../src/components/BreadCrumbs/Breadcrumbs";

const Meta = styled.a`
  ${tw` no-underline cursor-pointer bg-transparent p-2 rounded-lg text-primary-700 border border-primary-700 font-medium text-base flex items-center leading-none last:mr-0 inline-block hover:bg-primary-700 hover:text-white hover:border-primary-700`}
  
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`
const ButtonContainer =  styled.div`${tw `flex justify-center items-center w-full`}`;
const LoadMoreButton =  styled.button`${tw `mt-16 mx-auto font-medium text-lg text-white px-4 py-2 rounded-lg border border-primary-700 bg-primary-700 hover:bg-secondary-600`}`;


const override = {
    display: "block",
    margin: "250px auto",
    borderColor: "#3b82f6",
  };

const heading = {
    title:'Bài Viết',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
}

const BlogsPage = ({categories}) => {

    const [tabIndex, setTabIndex] = useState(0);
  
    const [error, setError] = useState(null);
    const [categoryName, setCategoryName] = useState(null);
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
  
    const [visible, setVisible] = useState(7);
  
    const [activeIndex, setActiveIndex] = useState(-1)
  
    const onLoadMoreClick = () => {
      setVisible(v => v + 6);
    };
  
    useEffect(() => {
      if (categoryName) {
        axios
        .get(`${process.env.REACT_APP_BACKEND}/api/posts?populate=*&pagination[limit]=${visible}&sort[0]=createdAt:desc&filters[$and][0][categories][category_name][$eq]=${categoryName}`)
        .then(({ data }) => {setPosts(data.data); setIsLoading(false);})
        .catch((error) => setError(error));
      } else {
        axios
        .get(`${process.env.REACT_APP_BACKEND}/api/posts?populate=*&pagination[limit]=${visible}&sort[0]=createdAt:desc`)
        .then(({ data }) => {setPosts(data.data); setIsLoading(false);})
        .catch((error) => setError(error));
      }
      
    }, [visible, categoryName]);
    
    const handleClick = (value) =>{
      setActiveIndex(value)   
    }
    
    return (
        <>
            <Navbar />
            <PageTitle title={heading.title} description={heading.description}/>
            { !isLoading ? 
                <section className='pb-70' data-aos="fade-up" data-aos-duration="2000">
                    <div className="container ">
                        <div className="mb-5 flex items-center gap-2 mt-10">
                            <p className="font-semibold text-base text-dark-500 mr-1">Danh mục:</p>
                            <Meta onClick={() => {setCategoryName(null); handleClick();}} href='' className={activeIndex === -1 ? "category-selected" :""}>
                               Tất cả bài viết
                            </Meta>
                            {categories.map((category, index) => (
                              <Meta key={index} onClick={() => {setCategoryName(category.attributes.category_name); handleClick(index);}} className={index === activeIndex ? "category-selected" :""} id={`button-${index}`}>
                                <div>{category.attributes.category_name}</div>
                              </Meta>
                            ))}
                        </div>
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

            <Footer />
        </>
    );
};

export default BlogsPage;