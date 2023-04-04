/*
Using Framer Motion to create a preloader animation

The preloader animation currently is just three dots that jump up and down in sequential order.
The dots should be in the middle of the screen
*/

import React from 'react';
import { motion } from 'framer-motion';

const style = {
    width: 30,
    height: 30,
    margin: 10,
    borderRadius: 20,
    display: 'inline-block',
    background: '#fff',
}

const Preloader = () => {
    return (
        <div>
            <motion.div
                style={style}
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: 0.2,
                }}
            />
            <motion.div
                style={style}
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: 0.4,
                }}
            />
            <motion.div
                style={style}
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: 0.6,
                }}
            />
        </div>
    );
};



export default Preloader;

