import { Variants } from "framer-motion"

export const variantsContentTexts: Variants = {
    initial: { opacity: 0, y: -400 },
    animate: {  opacity: 1, y: 0 },
    exit : {
        opacity: 0,
        y: -200,
    }
}
export const variantsTitleItem: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

export const variantsTitleContentText: Variants = {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -200 },
}

export const variantsParagraphContentText: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
}