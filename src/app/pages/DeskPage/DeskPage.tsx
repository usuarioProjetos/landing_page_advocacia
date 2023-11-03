"use client"
// CSS
// React
import { useState, useEffect } from 'react'
import Image from 'next/image'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './DeskPage.css'
import { EffectCoverflow, Pagination } from 'swiper/modules';
// Components
import { Title } from '@/app/components/Title/Title'
// Datas
import { DatasDeskPage } from '../../datas/DeskPage'

export const DeskPage = () => {
    const [isSwiperReady, setIsSwiperReady] = useState(false);

    useEffect(() => {
        setIsSwiperReady(true);
    }, []);
    

    return (
        <section className="container">
            <div className="divsBg">
                <div className="bgMobile" />
                <div className="firstDivBg"/>
                <div className="divBoxShadow" />
            </div>
            <Title
                text='escritório'
                widthSquare='80%'
            />
            
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                style={{ opacity: isSwiperReady ? 1 : 0 }}
                className="swiper_container"
            >
                {DatasDeskPage.items.map(item => (
                    <SwiperSlide
                        className={`item_container`}
                        key={item.id}
                    >
                        {/* <Image
                            src={item.src} 
                            alt='Imagem do escritório'
                        /> */}
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <div className="contentPagination">
                <div className="swiper-pagination">
                    
                </div>
            </div>

            <div className="line">
                <div className="firstLine"></div>
                <div className="secondLine"></div>
            </div>

        </section>
    )
}

