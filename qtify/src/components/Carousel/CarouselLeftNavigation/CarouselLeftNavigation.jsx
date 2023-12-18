import React, { useEffect, useState } from "react";
import {useSwiper} from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning);
    useEffect(()=>{
        swiper.on("slideChange",()=>{
            setIsBeginning(swiper.isBeginning);
        })
    },[swiper]);

    return(
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()} />}
        </div>
    )
}