import React, {useEffect, useState} from 'react'
//import { initFlowbite } from 'flowbite';
import { useParams } from 'react-router-dom'
import Drawer from '../../components/Drawer/Drawer';
import Carousel from '../../components/Carousel/Carousel';
import './SingleProduct.css'
import axios from 'axios';
import Breadcrumbs from '../../components/BreadCrumbs/Breadcrumbs';
import parse from 'html-react-parser';
import MoonLoader from "react-spinners/MoonLoader";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../sections/Footer/Footer';

const override = {
    display: "block",
    margin: "250px auto",
    borderColor: "#3b82f6",
  };

function SingleProduct() {

  const [isOpen, setIsOpen] = useState(false);
  const  [show, setShow] = useState(null);
  const  [error, setError] = useState();

  /*useEffect(() => {
    initFlowbite();
  }, [])*/

  const [product, setProduct] = useState([])
  const [isBusy, setBusy] = useState(true)

  const productId = useParams();

    useEffect(() => {
      async function fetchData() {
        axios
        .get(`${process.env.REACT_APP_BACKEND}/api/san-phams?filters[slug][$eq]=${productId.id}&populate=deep`)
        .then(({ data }) => 
          {
            setProduct(data.data);
            setBusy(false);
          })
        .catch((error) => setError(error));
      }

    fetchData();
  
    }, [productId]);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleShow = (id) => {
    setShow(id)
  }

  const doubleFunc = (id) => {
    handleClick();
    handleShow(id);
  }

  console.log(product[0])

  return (
    <div>  
        <Navbar />
        {!isBusy ? 
        <div className="py-20 pt-40 px-6 min-h-screen container md:px-24">

            <div className='breadcrumb mb-12'>
              <Breadcrumbs prop={product[0].attributes.ten_sanpham}/>
            </div>
            <div className='flex flex-col md:flex-row justify-center mb-20 w-auto'>
              
                <div className='flex flex-col relative'>
                    {product[0].attributes.gia_sanpham && <div className='absolute top-4 right-4 text-black py-2 px-5 bg-gray-100 text-3xl font-bold rounded-full tracking-wide z-50'>{product[0].attributes.gia_sanpham}</div>}
                    { product[0].attributes.thuvien_hinhanh.data ? 
                      <div>
                          <Carousel prop={product[0].attributes.thuvien_hinhanh.data}/> 
                      </div> : 
                      <img src={product[0].attributes.hinhanh_bia.data.attributes.url} width="500" className='relative mb-10 rounded-lg w-full'/>
                    }
                </div>
                <div className='w-full mt-10 md:mt-0 md:pl-16'>

                    <h2 className="text-left text-4xl md:text-4xl text-secondary-600 font-bold mb-4">{product[0].attributes.ten_sanpham}</h2>

                    <p className='mb-2 text-primary-700'>{product[0].attributes.mota_gioithieu}</p>
                    <div className='mb-4'>
                      {/*<div className='markdown-parser'>
                        <BlocksRenderer content={product[0].attributes.mota_ngan} />
                        </div>*/}
                      <div className='markdown-parser'>
                        {parse(product[0].attributes.sanpham_gioithieu)}
                      </div>
                    </div>

                    <div className='tag flex flex-wrap gap-3'>
                      {
                        product[0].attributes.hoat_chat.data.map( (hoatchat) => (
                          <div key={hoatchat.id}>
                              <button onClick={() => doubleFunc(`hoat-chat-${hoatchat.id}`)} className='blob-blue bg-blue-800 text-semibold text-white text-lg py-1.5 px-4 rounded-full whitespace-nowrap focus:ring-4 focus:ring-blue-300'>{hoatchat.attributes.ten_hoat_chat}</button>
                          </div>
 
                        ))
                      }

                      {
                        product[0].attributes.hoat_chat.data.map( (hoatchat1) => (
                          <div key={hoatchat1.id} id={`hoat-chat-${hoatchat1.id}`} className={`hoat-chat-${hoatchat1.id}`=== show ? "projectShowing" : "projectHidden"}>
                              <Drawer prop={hoatchat1.attributes} isOpen={isOpen} setIsOpen={setIsOpen} />
                          </div>
 
                        ))
                      }
                      
                    </div>
                </div>

            </div>

            <div className="mb-12">
              <div className='w-auto flex flex-col justify-center'>
                  <h2 className="whitespace-nowrap text-center md:text-left md:pl-2 text-3xl text-secondary-600 font-bold mb-2">Chi Tiết Sản Phẩm</h2>
                  <div className='w-full border-b-4 border-secondary-600 mb-8'></div>
                  {/*<div className='markdown-parser'>
                    <BlocksRenderer content={product[0].attributes.mota_chitiet} />
                    </div>*/}
                  { product[0].attributes.sanpham_chitiet ? 
                    <div className='markdown-parser'>
                        {parse(product[0].attributes.sanpham_chitiet)}
                    </div> 
                    : 
                    <div>Nội dung đang được cập nhật...</div>
                  }
              </div>
            </div> 

        </div> :  
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
    </div>
  )
}

export default SingleProduct