import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cardimg from '../../assets/videothumbnail/vidthumb.jpg'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import './VidCardSlide.scss'

const playList = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/76fLueKDhxE?si=qaRnQquPRsLaGxxS',
    thumbnail: cardimg,
    title: 'BIT Vietnam on ViTV - National Economic Channel (Vol.2)',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/76fLueKDhxE?si=qaRnQquPRsLaGxxS',
    thumbnail: cardimg,
    title: 'BIT Vietnam on VTC Vietnam National TV (Vol.1)',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/76fLueKDhxE?si=qaRnQquPRsLaGxxS',
    thumbnail: cardimg,
    title: 'WBF Vietnam - The Commercial Development of the Blockchain in the Traditional Industry Panel',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/embed/76fLueKDhxE?si=qaRnQquPRsLaGxxS',
    thumbnail: cardimg,
    title: 'MXC kicks off VBSession on Sunday, October 20th with Vietnamese Women’s Day',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/76fLueKDhxE?si=qaRnQquPRsLaGxxS',
    thumbnail: cardimg,
    title: 'Thailand Blockchain Week 2019 | BLOCKCHAIN THOUGHTS LEADERSHIP CONFERENCE"',
  },
]


function VidCardSlide() {
  const [selectedVideo, setSelectedVideo] = useState('https://www.youtube.com/embed/76fLueKDhxE?si=qaRnQquPRsLaGxxS')

  return (
    <div className='playlist-section' id="playlist">
      <div className='playlist-section-container'>
        <h1>Thư viện</h1>
        <p className="text-base mb-8">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <iframe width="auto" height="auto" src={selectedVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <Swiper
                            slidesPerView={5}
                            spaceBetween={0}
                            centeredSlides={true}
                            initialSlide={3}
                            loop={false}
                            modules={[Pagination]}
                            className="vid-gallery"
                            breakpoints={{
                                0: {
                                slidesPerView: 3,
                                },
                                768:{
                                slidesPerView: 5
                                },
                            }}
                        >

                            {
                                playList.map( (video, i) => (
                                    <SwiperSlide key={i} className='video-card'>
                                        <div onClick={ () => setSelectedVideo(video.url)} key={i} className="hover:scale-[1.05] cursor-pointer bg-transparent h-128 transition-all ease-in-out duration-300 overflow-hidden text-gray-700 transition duration-1000 ease-in-out rounded-lg p-1 ">
                                            <div className="m-2 text-justify">
                                                <img alt="card img" className="rounded-md transition duration-1000 ease-in-out" src={video.thumbnail} />
                                                <h2 className="font-bold my-4 text-lg md:text-lg text-center h-auto">{video.title}</h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            
                        </Swiper>

      </div>
    </div>

  )
}

export default VidCardSlide