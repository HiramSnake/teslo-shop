'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import './slideshow.css'
import { Navigation,Thumbs,FreeMode, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';


 interface Props{
    images:string[];
    title: string;
    classname?:string;
 }

export const ProductMobileSlideshow = ({images,title,classname}:Props) => {

  return (

    <div className={classname}>

<Swiper
    
        style={{
          width:'100vw',
          height:'500px'
        }}
        pagination

        autoplay={{delay:2500}}
       
        modules={[FreeMode, Navigation, Pagination,Autoplay]}
        className="mySwiper2"
      >
        {
            images.map(image =>(
        <SwiperSlide key={image} >
            <Image className='object-fill' src={`/products/${image}` } width={600} height={500} alt={title}/>
        
        </SwiperSlide>

        



            ))
        }
     
      </Swiper>

   

      
      </div>
  );
};