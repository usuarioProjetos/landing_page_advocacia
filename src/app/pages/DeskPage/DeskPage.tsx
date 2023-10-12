"use client"
// CSS
import './DeskPage.css'
// React
import { useState } from 'react'
import Image from 'next/image'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Components
import { Title } from '@/app/components/Title/Title'
// Datas
import { DatasDeskPage } from '../../datas/DeskPage'

export const DeskPage = () => {
    
    const [currentIndexPrev, setCurrentIndexPrev] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(1)
    const [currentIndexNext, setCurrentIndexNext] = useState(2)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < DatasDeskPage.items.length - 1 ? prevIndex + 1 : 0))
        setCurrentIndexPrev((prevIndex) => (prevIndex < DatasDeskPage.items.length - 1 ? prevIndex + 1 : 0))
        setCurrentIndexNext((prevIndex) => (prevIndex < DatasDeskPage.items.length - 1 ? prevIndex + 1 : 0))
    };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : DatasDeskPage.items.length - 1))
        setCurrentIndexPrev((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : DatasDeskPage.items.length - 1))
        setCurrentIndexNext((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : DatasDeskPage.items.length - 1))
    };

    return (
        <section className="deskPage">
            <Title
                text={DatasDeskPage.title}
                widthSquare='80%'
            />
            <article className="carousel-container">
                <button className="prev-button" onClick={handlePrev}>
                    Previous
                </button>
                <div className="carousel">
                    <div className="postItem">
                        {DatasDeskPage.items[currentIndexPrev].text}
                    </div>
                    <div className="atualItem">
                        {DatasDeskPage.items[currentIndex].text}
                    </div>
                    <div className="nextItem">
                        {DatasDeskPage.items[currentIndexNext].text}
                    </div>
                </div>
                <button className="next-button" onClick={handleNext}>
                    Next
                </button>
            </article>
            
            
        </section>
    )
}

{/*
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                loop={true}
                coverflowEffect={{
                    rotate: 15,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                 </SwiperSlide>
            </Swiper>
            */}