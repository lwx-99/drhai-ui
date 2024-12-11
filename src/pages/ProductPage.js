import React, {useEffect} from 'react'
import ProductCollection from '../components/ProductCollection/ProductCollection'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../sections/Footer/Footer'
import Breadcrumbs from '../components/BreadCrumbs/Breadcrumbs'

function ProductPage() {
  return (
    <>
        <Navbar />
        <div className='container pt-40 px-4 md:px-2'>
          <div className='breadcrumb'>
              <Breadcrumbs />
          </div>
          <div className='product-page'>
            <ProductCollection/>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default ProductPage