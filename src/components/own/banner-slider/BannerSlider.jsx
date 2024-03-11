import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from './BannerSlider.module.scss'

export default function BannerSlider({banners}) {
    const sliderSettings = {
        slidesToShow: 1,
        inifinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        //arrows: true,
        //dots: true,
        fade: true,
        width: 1440,
        height: 500,
    }
    return(
    <>
    
    <div className={styles["slider-container"]}>
        <Slider {...sliderSettings}>
            {Array.isArray(banners) && 
            banners.map((item, index) => {
                return item.fields.promo ? (
                    <Image 
                        src={`https:${item.fields.image.fields.file.url}`}
                        alt={item.fields.title}
                        key={item.sys.id}
                        width={1440}
                        height={550}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}                        
                    />
                ) : null
            })
            }
        </Slider>
    </div>
    </>
    )
}