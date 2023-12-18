import React, { useEffect } from 'react';
import styles from "./Carousel.module.css";
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";


const Controls =({data}) =>{
    const swiper = useSwiper();
    useEffect(()=>{
        // swiper.slideTo(0,1);
    },[data]);
    return <></>;
}
function Carousel({data, renderComponent}) {
  return (
    <div className={styles.wrapper}>
        <Swiper 
        style={{padding: "0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        >
            <Controls data={data}/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {data.map((ele) =>(
                <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel;