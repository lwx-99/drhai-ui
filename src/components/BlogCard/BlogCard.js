import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({post}) => {

    return (
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="blog-card">
                <div className="blog-img">
                    <img className="" src={post.attributes.post_banner.data.attributes.url} alt="blog"/>
                    <div className="date">
                        {new Date(post.attributes.publishedAt).toLocaleDateString("vi-VI", {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        })}
                    </div>
                </div>
                <div className="blog-text">
                    <span><Link to="/">{post.attributes.danh_mucs.data[0].attributes.category_name}</Link></span>
                    <h3><Link className="hover:text-primary-700" to={`/bai-viet/${post.attributes.post_uid}`}>{post.attributes.post_title}</Link></h3>
                    {post.attributes.post_summary && <p>{post.attributes.post_summary}</p> }
                </div>
            </div>
        </div>
    );
};

export default BlogCard;