"use client"
import React, { useState } from 'react'
import './SliderCard.css'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import ImageExample from '../../../assets/city.jpeg'
import { ICardFieldWork, IDatasFirstWorkDesktop } from '@/app/datas/FieldWork'
import { SwiperSlide } from 'swiper/react'

interface Props {
    item: ICardFieldWork
    iconDefault: StaticImageData
    iconSelectItem: StaticImageData
}


export const SliderCard = ({ item, iconDefault, iconSelectItem }: Props) => {
    const [ showContent, setShowContent ] = useState(false)
    return (
        <SwiperSlide className="sliderCard">
            <h1>{item.title}</h1>
        </SwiperSlide>
    )
}