export const durationAnimation = .2

export const animationLine1 = {
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
export const animationLine2 = {
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

export const animationLine3 = {
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