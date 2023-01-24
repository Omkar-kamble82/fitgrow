export const buttonVariant = (delay) => ({
    hidden: {
        x: -50,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .60,
            delay,
        },
    },
});
export const buttonrightVariant = (delay) => ({
    hidden: {
        x: 50,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .60,
            delay,
        },
    },
});

export const navVariants = {
    hidden: {
    opacity: 0,
    y: -50,
    transition: {
    type: 'spring',
    stiffness: 300,
    damping: 140,
    },
},
show: {
    opacity: 1,
    y: 0,
    transition: {
    type: 'spring',
    stiffness: 80,
    delay: 0.65,
    },
},
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
        staggerChildren,
        delayChildren,
    },
},
});

export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
        },
    },
});
