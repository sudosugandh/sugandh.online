import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ScrollTriggeredAnimation = ({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
  style = {},
  ...props 
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { 
    once: true, 
    threshold: threshold,
    margin: "-100px 0px"
  })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay }
    },
    fadeInDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay, type: "spring", stiffness: 100 }
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -10, scale: 0.8 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
      transition: { duration, delay, type: "spring", stiffness: 200 }
    },
    slideUp: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    parallax: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay },
      style: {
        y: useTransform(scrollYProgress, [0, 1], [100, -100])
      }
    }
  }

  const animationProps = animations[animation] || animations.fadeInUp

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, ...animationProps.style }}
      initial={animationProps.initial}
      animate={inView ? animationProps.animate : animationProps.initial}
      transition={animationProps.transition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollTriggeredAnimation