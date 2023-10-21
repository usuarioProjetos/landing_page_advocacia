"use client"
import React from 'react'
import './SliderCard.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ImageExample from '../../../assets/city.jpeg'

interface Props {
    el: any
    i: number
}


export const SliderCard = ({ el, i }: Props) => {
    
    return (
        <motion.div
            className='sliderCard'
        >
            <div className="sliderCard_box">
                <motion.div className='sliderCard_box_img'>
                    <Image 
                        src={ImageExample} 
                        alt='slider profile' 
                        width={250}
                        height={200}
                        objectFit='cover'
                        className='sliderCard_box_img_img'
                    />
                </motion.div>

                <div className="sliderCard_box_title">
                    <p>NFT Video #1245</p>

                    <div className="sliderCard_box_title_like">
                        <small>1 of 100</small>
                    </div>
                </div>

                <div className="sliderCard_box_price">
                    <div className="sliderCard_box_price_box">
                        <small>Current Bid</small>
                        <p>1.000 ETH</p>
                    </div>

                    <div className="sliderCard_box_price_time">
                        <small>Reaming time</small>
                        <p>3h : 15m : 20s</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}