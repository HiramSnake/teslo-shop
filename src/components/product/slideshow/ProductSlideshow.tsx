'use client'
import { useState } from 'react';

import {Swiper as SwiperObject} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './slideshow.css'
import { Navigation,Thumbs,FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';


 interface Props{
    images:string[];
    title: string;
    classname?:string;
 }

export const ProductSlideshow = ({images,title,classname}:Props) => {
    const [thumbsSwiper, setthumbsSwiper] = useState<SwiperObject>()
  return (

    <div className={classname}>

<Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }as React.CSSProperties
    }
        spaceBetween={10}
        navigation={true}
        autoplay={{delay:2500}}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper2"
      >
        {
            images.map(image =>(
        <SwiperSlide key={image} >
            <Image className='rounded-lg object-fill' src={`/products/${image}` } width={1024} height={800} alt={title}/>
        
        </SwiperSlide>

        



            ))
        }
     
      </Swiper>

      <Swiper
        onSwiper={setthumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         {
            images.map(image =>(
        <SwiperSlide key={image} >
            <Image className='rounded-lg object-fill' src={`/products/${image}` } width={300} height={300} alt={title}/>
        
        </SwiperSlide>

        



            ))
        }
      </Swiper>

      
      </div>
  );
};