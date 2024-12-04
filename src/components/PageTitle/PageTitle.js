import React from 'react';
import './PageTitle.scss';

const PageTitle = ({title, description}) => {
    return (
        <div className='page-title'>
            <div className="container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div> 
    );
};

export default PageTitle;