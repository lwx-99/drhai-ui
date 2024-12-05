
import React, {useEffect} from 'react'

import ProductCollection from '../components/ProductCollection/ProductCollection'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../sections/Footer/Footer'
function ProductPage() {

  return (
    <>
        <Navbar />
        <div className=''>
            <ProductCollection/>
        </div>
        <Footer />
    </>
  )
}

export default ProductPage