import { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'

export const useAdvancedAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    trigger = 'scroll'
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [animationState, setAnimationState] = useState('idle')
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform scroll progress into various animations
  const fadeIn = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const slideUp = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const scaleIn = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
  const rotateIn = useTransform(scrollYProgress, [0, 0.4], [-10, 0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setAnimationState('entering')
          
          // Set animation state to 'entered' after a delay
          setTimeout(() => {
            setAnimationState('entered')
          }, 500)
        } else if (!once) {
          setIsVisible(false)
          setAnimationState('exiting')
          
          setTimeout(() => {
            setAnimationState('exited')
          }, 300)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, once])

  // Parallax effects
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const parallaxX = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  // Rotation based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  // Scale based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])

  return {
    ref,
    isVisible,
    animationState,
    scrollYProgress: smoothProgress,
    fadeIn,
    slideUp,
    scaleIn,
    rotateIn,
    parallaxY,
    parallaxX,
    rotate,
    scale,
    // Animation variants for common patterns
    variants: {
      fadeInUp: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
      },
      fadeInDown: {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 }
      },
      fadeInLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 }
      },
      fadeInRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
      },
      scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.2 }
      },
      rotateIn: {
        initial: { opacity: 0, rotate: -10, scale: 0.8 },
        animate: { opacity: 1, rotate: 0, scale: 1 },
        exit: { opacity: 0, rotate: 10, scale: 1.2 }
      }
    }
  }
}

export default useAdvancedAnimation