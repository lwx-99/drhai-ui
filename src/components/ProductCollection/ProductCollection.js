import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Product from '../Product/Product'
import Breadcrumbs from '../BreadCrumbs/Breadcrumbs'
import MoonLoader from "react-spinners/MoonLoader";

const override = {
    display: "block",
    margin: "250px auto",
    borderColor: "#3b82f6",
  };


function ProductCollection() {

    const [error, setError] = useState()

  const [collection, setCollection] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/bo-san-phams?populate=deep`)
      .then(({ data }) => {setCollection(data.data); setIsLoading(false)})
      .catch((error) => setError(error));
  }, []);


  return (
    <div className="" id='product-page'>
        <div className='flex flex-col justify-start'>
          <div className='title-container'>
              <h2 className='text-4xl md:text-6xl font-bold'>Sản Phẩm</h2>
              <div className='w-auto md:w-auto flex flex-col justify-center'>
                  <p className='w-full text-left text-base'></p>
              </div>
          </div>
        </div>
        { !isLoading ? 
        <div className='mt-12 md:mt-20'>
            {collection.map( (collection) => (

                <div className='mb-32' key={collection.id}>
                  <div className="mb-3 flex-col justify-between items-center">
                      <div className='w-full border-b-2 border-gray-300 mb-5'></div>
                      <div className='w-auto md:w-auto flex flex-col justify-center'>
                          <h2 className="text-left text-3xl md:text-4xl text-primary-700 font-bold">{collection.attributes.ten_bo_san_pham}</h2>
                      </div>
                  </div>

                  <div className='flex justify-center mb-10'>
                    <p className='w-full text-left text-base'>{collection.attributes.mo_ta_ngan}
                    </p>
                  </div>

                  <div className='tag flex justify-center mb-12 gap-5'>
                    <Product prop={collection.attributes.san_phams}/>
                  </div>
                </div>
            ))}
        </div> : 
        <MoonLoader 
        cssOverride={override}
        color="#4cb269"
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        /> }
    </div>
  )
}

export default ProductCollection