import React from 'react';
import { Link } from 'react-router-dom';

const Product = ( { prop } ) => {

    return (
        <>
            <div className="p-2" id='product-01'>
                <div className="">
                    <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 md:px-0">   
                        {
                            prop.data.sort(
                                function(a, b) { 
                                    return a.id - b.id;
                                  }
                            ).map( (product) => (
                                <div key={product.id} className="bg-gray-50 transition-all ease-in-out duration-400 overflow-hidden border border-secondary-600 shadow-md text-gray-700 hover:scale-105 rounded-lg md:rounded-xl p-4 md:p-6 min-h-max">
                                    <div className="text-justify text-sm h-full flex flex-col justify-between">
                                        <div className='relative'>
                                            {product.attributes.gia_sanpham && <div className='absolute top-3 right-4 text-black py-1 px-1 md:py-1 md:px-4 bg-gray-100 text-md md:text-lg font-bold rounded-full tracking-wide'>{product.attributes.gia_sanpham}</div>}
                                            <img src={product.attributes.hinhanh_bia.data.attributes.formats.small.url} className='rounded-lg'>
                                            </img>
                                        </div>
                                        <div className='h-auto flex flex-col justify-between items-stretch'>
                                            <h4 className="text-secondary-600 font-semibold text-base md:text-lg text-center mb-2 mt-4 h-auto">{product.attributes.ten_sanpham}</h4>
                                            <p className="text-center font-medium text-sm h-auto">{product.attributes.mota_gioithieu}</p>
                                        </div>
                                        <div className="flex justify-center mt-4">
                                                <Link to={`/san-pham/${product.attributes.slug}`} className="text-white bg-primary-700 hover:bg-secondary-600 inline-flex items-center justify-center px-4 md:px-4 py-2 text-md md:text-base shadow-xl rounded-full group">
                                                    Xem chi tiết
                                                    <svg className="w-4 h-4 ml-1 ml-2 group-hover:translate-x-2 duration-300 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }                         



                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;