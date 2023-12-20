"use client"
import { motion, useAnimation } from 'framer-motion'
import './BurguerMenu.css'
import { useState, useRef } from 'react'
import { animationLine1, animationLine2, animationLine3 } from '@/app/animations/BurguerMenu'

interface Props {
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurguerMenu = ({ showMenu, setShowMenu }: Props) => {
    
    return (
      <motion.div
        className='burguerMenu'
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
        transition={{
            duration: .5
        }}
      >
        <motion.div
          className='line line1'
          animate={ showMenu ? animationLine1.enter : animationLine1.exit}
        ></motion.div>
        <motion.div
          animate={ showMenu ? animationLine2.enter : animationLine2.exit}
          className='line line2'
        ></motion.div>
        <motion.div
          className='line line3'
          initial={{ width: '50%' }}
          animate={ showMenu ? animationLine3.enter : animationLine3.exit}
        ></motion.div>
      </motion.div>
    );
}
  
  
  
  
  
  