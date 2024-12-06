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


function HomeProduct() {

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
    <div className="container" id='product-page'>

        { !isLoading ? 
        <div className='mt-0 md:mt-0'>
            {collection.map( (collection) => (

                <div className='mb-28' key={collection.id}>
                  <div className="mb-8 flex justify-between items-center">
                      <div className='w-auto md:w-auto flex flex-col justify-center'>
                          <h2 className="text-left text-5xl md:text-5xl text-secondary-600 font-bold">{collection.attributes.ten_bo_san_pham}</h2>
                      </div>
                  </div>

                  <div className='flex justify-center mb-10'>
                    <p className='w-full text-left text-secondary-600 text-lg'>{collection.attributes.mo_ta_ngan}
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

export default HomeProduct