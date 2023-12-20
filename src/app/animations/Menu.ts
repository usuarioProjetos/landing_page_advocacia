import { Variants } from "framer-motion"
import { DatasMenu } from "../datas/Menu"

export const variantsAnimationMenu: Variants = {
    animate: {
        opacity: 1,
        height: "100vh",
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0,
        transition: {
            duration: .5
        }
    },
    exit: {
        height: 0,
        opacity: 0,
        borderBottomLeftRadius: "10%",
        borderBottomRightRadius: "10%",
        transition: {
            delay: parseFloat(`0.${DatasMenu.items.length}`) + .1,
            duration: .5,
        },
    }
}

export const variantsAnimationLogoMenu: Variants = {
    initial: {
        y: 50, 
        opacity: 0,
    },
    animate: {
        y: 0, 
        opacity: 1, 
        type: 'tween',
        transition: {
            delay: 1
        }
    },
    exit: {
        y: 50, 
        opacity: 0, 
        type: 'tween',
        transition: {
            delay: 0
        },
    }
}