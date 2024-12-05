import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './Carousel.css'

function Carousel({prop}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    console.log(prop)
    
  return (
    <div className="carousel">
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >

        {
            prop.map((img, i) => ( 
                <div key={i}>
                            <SwiperSlide>
                                <img src={img.attributes.url} />
                            </SwiperSlide>

                </div>
            )
            )
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
            prop.map((img, i) => ( 
                <div key={i}>
                            <SwiperSlide>
                                <img src={img.attributes.formats.medium.url} />
                            </SwiperSlide>

                </div>
            )
            )
        }
      </Swiper>
    </div>
  )
}

export default Carousel