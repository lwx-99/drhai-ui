import React, {useState, useEffect }from 'react'
import './SingleBlog.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';

import axios, { all } from 'axios';
import parse from 'html-react-parser';

import MoonLoader from "react-spinners/MoonLoader";
import { FacebookShareButton, TelegramShareButton, TwitterShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TelegramIcon, XIcon, EmailIcon } from "react-share";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";

import NotFound from '../../components/404/NotFound';
import Breadcrumbs from '../../components/BreadCrumbs/Breadcrumbs';

const AuthorShare = styled.div`
  ${tw`mt-6 flex w-full justify-between items-center`}

  .author-container {
    ${tw`flex items-center gap-2 md:gap-3`}
  }

  .author-img {
    ${tw`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary-600 `}
  }

  .author-name {
    ${tw`font-semibold text-gray-800 `}
  }

  .published-date {
    ${tw`font-medium text-xs md:text-sm text-gray-600 `}
  }
  
  .share-container {
    ${tw`flex gap-1 pl-4 md:gap-2`}
  }
`

const PostImage = tw.img`w-full mx-auto rounded-lg mt-0`;

//For Recent Posts Col
const Title = tw.h5`mt-6 text-lg font-bold transition duration-300 group-hover:text-primary-600`;
const AuthorName = tw.h6`font-semibold text-sm text-gray-700`;
const PostsContainer = tw.div`mt-6 flex flex-col sm:flex-col sm:justify-between lg:justify-start bg-gray-100 p-4 rounded-xl shadow-md`;
const Post = tw.a`no-underline flex flex-col justify-start items-start sm:max-w-sm cursor-pointer mb-16 last:mb-0`;
const Image = tw.img`rounded-lg`
const Summary = tw.p`text-gray-700 text-base w-full py-4 px-5 bg-gray-200 italic rounded-lg mt-10`
const PostTextContainer = tw.div`mr-3`
const PostContent = styled.div`${tw`mt-8`}
`

const MetaContainer = tw.div`flex items-center justify-between mb-2 mt-2 gap-2`;
const Meta = styled.div`
  ${tw`bg-gray-200 p-1 mb-2 rounded text-primary-600 border border-primary-600 font-medium text-sm flex items-center leading-none last:mr-0 inline-block`}
  svg {
    ${tw`w-4 h-4 mr-1`}
}`

const override = {
    display: "block",
    margin: "250px auto",
    borderColor: "#3b82f6",
  };


const SingleBlog = ( { latestPost } ) => {

    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    const postId = useParams();


    useEffect(() => {
        async function fetchData() {
          axios
          .get(`${process.env.REACT_APP_BACKEND}/api/bai-viets?filters[post_uid][$eq]=${postId.id}&populate=deep`)
          .then(({ data }) => 
            {
              setPost(data.data);
              setIsLoading(false);
            })
          .catch((error) => setError(error));
        }
  
      fetchData();
    
      }, []);
  
    const shareUrl = `https://grow3.pro/posts/${postId.id}`

    return (
        <>
            <Navbar />
            <section className='pb-70 single-blog'>
            { !isLoading ?
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                              <main className="single-blog-area">
                                <div className='breadcrumb'>
                                    <Breadcrumbs prop={post[0].attributes.post_title}/>   
                                </div>    
                                <p className="single-blog-category">
                                    <MetaContainer>
                                        {post[0].attributes.danh_mucs.data.map((category, index) => (
                                            <Meta key={index}>
                                                <TagIcon />
                                                <div>{category.attributes.category_name}</div>
                                            </Meta>
                                        ))}
                                    </MetaContainer>
                                </p>
                                <h2 className="single-blog-title">{post[0].attributes.post_title}</h2>
                                <img className='single-blog-banner mx-auto block rounded-lg' src={post[0].attributes.post_banner.data.attributes.url} alt="blog banner"/>
                                <AuthorShare>
                                  <div className='author-container'>
                                    <div>
                                      <img src={post[0].attributes.tac_gias.data[0].attributes.tac_gia_avatar.data.attributes.url} className='author-img'/>
                                    </div>
                                    <div>
                                      <p className='author-name'>{post[0].attributes.tac_gias.data[0].attributes.ten_tac_gia}</p>
                                      <p className='published-date'>vào {new Date(post[0].attributes.publishedAt).toLocaleDateString("vi-VN", {
                                          weekday: 'long',
                                          year: 'numeric',
                                          month: 'long',
                                          day: 'numeric',
                                        })}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="share-container">
                                    <FacebookShareButton
                                      url={shareUrl}
                                      hashtag={""}
                                    >
                                      <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <TwitterShareButton
                                      title={post[0].attributes.post_title}
                                      url={shareUrl}
                                      hashtags={[]}
                                    >
                                      <XIcon size={32} round />
                                    </TwitterShareButton>
                                    <TelegramShareButton
                                      title={"test"}
                                      url={shareUrl}
                                      hashtags={["hashtag1", "hashtag2"]}
                                    >
                                      <TelegramIcon size={32} round />
                                    </TelegramShareButton>
                                    <EmailShareButton
                                      title={""}
                                      url={shareUrl}
                                      hashtags={""}
                                    >
                                      <EmailIcon size={32} round />
                                    </EmailShareButton>
                                  </div>
                                </AuthorShare>
                                <Summary>{post[0].attributes.post_summary}</Summary>
                                <PostContent>
                                  {post[0].attributes.post_content ? 
                                    <div className='markdown-parser'>
                                        {parse(post[0].attributes.post_content)}
                                    </div> 
                                    : 
                                    <div>...</div>
                                  }
                                </PostContent>
                               
                            </main>
                        </div>
                        <div className="col-lg-3">
                            <div className="blog-sidebar">
                                         <div className="sidebar-category mb-3">
                                    <h3 className="sidebar-heading text-lg">Bài viết gần đây</h3>
                                      <PostsContainer>
                                        {latestPost.map((post, index) => (
                                        <Post key={index} href={`/bai-viet/${post.attributes.post_uid}`} className="group">
                                          <PostTextContainer>
                                            <Title>{post.attributes.post_title}</Title>
                                            <MetaContainer>
                                                <Meta>
                                                  <TagIcon />
                                                  <div>{post.attributes.danh_mucs.data[0].attributes.category_name}</div>
                                                </Meta>
                                            </MetaContainer>
                                          </PostTextContainer>
                                          <Image src={post.attributes.post_banner.data.attributes.url} />
                                        </Post>
                                        ))}
                                      </PostsContainer>              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            :
                <MoonLoader 
                cssOverride={override}
                color="#4cb269"
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> }
            </section>
            <Footer/>
        </>
    );
};

export default SingleBlog;