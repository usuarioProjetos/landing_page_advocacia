"use client"
import { Title } from '../Title/Title'
import { useEffect, useRef, useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import './CarouselDesktop.css'
import { motion } from 'framer-motion'
import { SliderCard } from './SliderCard/SliderCard'
import { register } from 'swiper/element/bundle'
register()
import ImageExample from '../../assets/imageExampleFieldWork.png'
import BlackHammer from '../../assets/desk/blackHammer.png'
import WhiteHammer from '../../assets/desk/whiteHammer.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { EffectFade, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { DatasFieldPageDesktop } from '@/app/datas/FieldWork'

export const CarouselDesktop = () => {
        // Parte 1
    // const sliderArray = [1,2,3,4,5,6,7]
    // const [width, setWidth] = useState(0)
    // const dragSlider: any = useRef()

    // useEffect(() => {
    //     setWidth(dragSlider.current!.scrollWidth - dragSlider.current!.offsetWidth)
    // })

    // const handleScroll = (direction: 'left' | 'right') => {
    //     const { current } = dragSlider
    //     const scrollAmount = window.innerWidth > 1800 ? 300 : 210

    //     if(direction === 'left') {
    //         current!.scrollLeft -= scrollAmount
    //     } else {
    //         current!.scrollLeft += scrollAmount
    //     }
    // }

    // return(
    //     <div className="slider">
    //         <div className="slider_box">
    //             <h2>Explorer</h2>
    //             <div className="slider_box_button">
    //                 <p>Click on play icon & enjoy Nfts Video</p>

    //                 <div className="slider_box_button_btn">
    //                     <div className="slider_box_button_btn_icon">
    //                         <TiArrowLeftThick onClick={() => handleScroll('left')} />
    //                     </div>
    //                     <div className="slider_box_button_btn_icon">
    //                         <TiArrowRightThick onClick={() => handleScroll('right')} />
    //                     </div>
    //                 </div>
    //             </div>

    //             <motion.div className='slider_box_items' ref={dragSlider}>
    //                 <motion.div 
    //                     ref={dragSlider}
    //                     className="slider_box_item"
    //                     drag='x'
    //                     dragConstraints={{ right: 0, left: -width }}
    //                 >
    //                     {sliderArray.map((el, i) => (
    //                         <SliderCard key={i + 1} el={el} i={i} />
    //                     ))}
    //                 </motion.div>
    //             </motion.div>
    //         </div>
    //     </div>
    // )


        // Parte 2
    
        const datas = [
            { id: '1', image: ImageExample },
            { id: '2', image: ImageExample },
            { id: '3', image: ImageExample },
            { id: '4', image: ImageExample },
        ]
        return (
        <div className="containerCarousel">

            <Swiper
                className='swiperSlider'
                slidesPerView={'auto'}
                spaceBetween={10}
                grabCursor={true}
                initialSlide={1}
                // pagination={{ clickable: true }}
                // navigation
            >

                <SwiperSlide className='swiperSliderItem' />

                {DatasFieldPageDesktop.cards.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className='swiperSliderItem'
                    >
                        <div 
                            className="imagesField"
                        >
                            <h3>{item.title}</h3>
                            {/* <Image
                                className='imageField'
                                src={item.image}
                                alt='Slider'
                            /> */}
                        </div>

                        <div className="hammer">
                            <Image 
                                className='imageHammer'
                                src={WhiteHammer}
                                alt='Ícone de martelo'
                            />
                        </div>

                        <div className="contentTexts">
                            <h3 className='titleField'>{item.title}</h3>
                            <p className='textField'>{item.text}</p>
                        </div>
                    </SwiperSlide>
                ))}

                <SwiperSlide className='swiperSliderItem' />

            </Swiper>
        </div>
    )
}