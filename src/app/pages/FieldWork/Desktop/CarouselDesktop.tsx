"use client"
// Style
import './CarouselDesktop.css'
// Next/React
import Image from 'next/image'
import { useRef, useState } from 'react'
// Datas
import { DatasFieldPageDesktop } from '@/app/datas/FieldWork'
// Interfaces
import { ICardFieldWork } from '@/app/interfaces/FieldWork/FieldWork'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper/core'
// Framer-motion
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// Animations
import {
    variantsTitleItem, 
    variantsContentTexts,
    variantsParagraphContentText,
    variantsTitleContentText
} from '@/app/animations/FieldWork'

export const CarouselDesktop = () => {
        const [cards, setCards] = useState(DatasFieldPageDesktop.cards)
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3,
        });
        const [centerFirstElement, setCenterFirstElement] = useState<boolean>(false)
        const [centerLastElement2, setCenterLastElement2] = useState<boolean>(false)
        const [centerLastElement3, setCenterLastElement3] = useState<boolean>(false)

        const swiperRef = useRef<any>()
        
        const onMouseEnterCard = (card: ICardFieldWork) => {
            setCards(() => {
                const newValuesCards = [...cards]
                newValuesCards.map(item => {
                    if(item.id === card.id) {
                        item.showContent = true
                    } else {
                        item.showContent = false
                    }
                })
                return newValuesCards
            })
            
        }
        const onSlideChange = () => {
            setCenterFirstElement(false)
            setCenterLastElement2(false)
            setCenterLastElement3(false)
            const activeIndex = swiperRef.current?.realIndex;
            const totalSlides = cards.length;
            
            if (activeIndex === totalSlides - 2) {
                setCenterLastElement2(true)
            }
    
            if (activeIndex === 0) {
                setCenterFirstElement(true)
                setCenterLastElement2(false)
                setCenterLastElement3(false)
            } else if (activeIndex === totalSlides - 1) {
                setCenterFirstElement(false)
                setCenterLastElement3(true)
            }
        };

        return (
        <motion.section 
            ref={ref}
            className="containerCarousel"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={inView ? { opacity: 1, scale: 1, transition: { duration: .6 } } : {}}
        >
            
            <Swiper
                className='swiperSlider'
                slidesPerView={'auto'}
                spaceBetween={10}
                initialSlide={1}
                centeredSlides={false}
                grabCursor={true}
                ref={swiperRef}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={onSlideChange}
            >
                {!centerFirstElement && (
                    <div className="swiper-prev" onClick={() => swiperRef.current?.slidePrev()}>
                        &lt;
                    </div>
                )}
                
                <SwiperSlide style={{ display: 'none' }} className='swiperSliderItem spareElement' />
                
                <AnimatePresence>
                    {cards && cards.map(item => (
                        <article className="card" key={item.id}>
                            <SwiperSlide
                                className={`swiperSliderItem swiperSliderItem${item.id}`}
                                onMouseEnter={() => onMouseEnterCard(item)}
                            >
                                <div className={`imageDiv imageDiv${item.id} ${item.showContent === false ? 'opacityImage' : ''}`}>
                                    <Image
                                        src={item.image}
                                        alt=''
                                        loading='eager'
                                    />
                                    {item.showContent === false && (
                                        <motion.h4
                                            variants={variantsTitleItem}
                                            initial={"initial"}
                                            animate={item.showContent ? "exit" : "animate"}
                                            transition={{
                                                duration: .5
                                            }}
                                        >
                                            {item.title}
                                        </motion.h4>
                                    )}
                                </div>

                                <div className="iconImageDiv"
                                    style={{
                                        backgroundColor: item.showContent ? '#fff' : '#007163'
                                    }}
                                >
                                    <Image 
                                        src={DatasFieldPageDesktop.icon}
                                        alt='Ícone de Martelo'
                                        loading='eager'
                                    />
                                </div>
                                

                                <motion.div 
                                    key={item.id}
                                    variants={variantsContentTexts}
                                    className="contentTexts" 
                                    initial={"initial"}
                                    animate={item.showContent ? "animate" : "exit"}
                                    transition={{
                                        type:' tween'
                                    }}
                                >
                                    <motion.h3
                                        variants={variantsTitleContentText}
                                        initial={"initial"}
                                        animate={item.showContent ? "animate" : "exit"}
                                        transition={{
                                            type:' tween',
                                            duration: .7
                                        }}
                                    >{item.title}</motion.h3>
                                    <motion.p
                                        variants={variantsParagraphContentText}
                                        animate={item.showContent ? "animate" : "exit"}
                                        transition={{
                                            type:' tween',
                                            duration: .7
                                        }}
                                    >{item.text}</motion.p>
                                </motion.div>
                                
                            </SwiperSlide>
                        </article>
                    ))}
                </AnimatePresence>
                <SwiperSlide style={{ display: 'none' }} className='swiperSliderItem spareElement' />
                
                {!centerLastElement2 && (
                    <div className="swiper-next-2" onClick={() => swiperRef.current?.slideNext()}>
                        &gt;
                    </div>
                )}
                {!centerLastElement3 && (
                    <div className="swiper-next-3" onClick={() => swiperRef.current?.slideNext()}>
                        &gt;
                    </div>
                )}
            </Swiper>
        </motion.section>
    )
}
