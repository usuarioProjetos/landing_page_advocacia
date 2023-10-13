"use client"
// CSS
// React
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './DeskPage.css'
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Components
import { Title } from '@/app/components/Title/Title'
// Datas
import { DatasDeskPage } from '../../datas/DeskPage'

export const DeskPage = () => {
    const [isSwiperReady, setIsSwiperReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsSwiperReady(true);
        }, 200);
    }, []);
    

    return (
        <section className="container">
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
                        <Image
                            src={item.src} 
                            alt='Imagem do escritório'
                        />
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





    // const [currentIndexPrev, setCurrentIndexPrev] = useState(0)
    // const [currentIndex, setCurrentIndex] = useState(1)
    // const [currentIndexNext, setCurrentIndexNext] = useState(2)

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex < DatasDeskPage.items.length - 1 ? prevIndex + 1 : 0))
    //     setCurrentIndexPrev((prevIndex) => (prevIndex < DatasDeskPage.items.length - 1 ? prevIndex + 1 : 0))
    //     setCurrentIndexNext((prevIndex) => (prevIndex < DatasDeskPage.items.length - 1 ? prevIndex + 1 : 0))
    // };
    
    //   const handlePrev = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : DatasDeskPage.items.length - 1))
    //     setCurrentIndexPrev((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : DatasDeskPage.items.length - 1))
    //     setCurrentIndexNext((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : DatasDeskPage.items.length - 1))
    // };