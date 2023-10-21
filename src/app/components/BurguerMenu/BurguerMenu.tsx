"use client"
import { motion, useAnimation } from 'framer-motion'
import './BurguerMenu.css'
import { useState, useRef } from 'react'

interface Props {
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const durationAnimation = .2

const animationLine1 = {
    enter: {
        rotate: 45,
        y: 10,
        transition: {
            duration: durationAnimation
        }
    },
    exit: {
        rotate: 0,
        y: 0,
        transition: {
            duration: durationAnimation
        }
    }
}
const animationLine2 = {
    enter: {
        opacity: 0,
        transition: {
            duration: durationAnimation
        }
    },
    exit: {
        opacity: 1,
        transition: {
            duration: durationAnimation
        }
    }
}

const animationLine3 = {
    enter: {
        rotate: -45,
        y: -10,
        width: '100%',
        transition: {
            duration: durationAnimation
        }
    },
    exit: {
        rotate: 0,
        y: 0,
        width: '50%',
        transition: {
            duration: durationAnimation
        }
    }
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
  
  
  
  
  
  