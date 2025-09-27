// Animation variants and utilities for enhanced micro-interactions

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const slideInUp = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export const slideInDown = {
  hidden: { 
    opacity: 0, 
    y: -50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export const bounceIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.3 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

export const rotateIn = {
  hidden: { 
    opacity: 0, 
    rotate: -180 
  },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export const flipInX = {
  hidden: { 
    opacity: 0, 
    rotateX: -90 
  },
  visible: { 
    opacity: 1, 
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const flipInY = {
  hidden: { 
    opacity: 0, 
    rotateY: -90 
  },
  visible: { 
    opacity: 1, 
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const zoomIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.5 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const staggerContainer = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const staggerItemSlow = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export const staggerItemFast = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Hover animations
export const hoverScale = {
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

export const hoverLift = {
  hover: { 
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

export const hoverGlow = {
  hover: { 
    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export const hoverRotate = {
  hover: { 
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

export const hoverPulse = {
  hover: { 
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

// Tap animations
export const tapScale = {
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
}

export const tapRotate = {
  tap: { 
    rotate: -5,
    transition: {
      duration: 0.1
    }
  }
}

// Loading animations
export const loadingSpin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity
    }
  }
}

export const loadingPulse = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

export const loadingBounce = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Page transitions
export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

export const slidePageTransition = {
  initial: { 
    opacity: 0, 
    x: 100 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    x: -100,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
}

// Special effects
export const typewriter = {
  hidden: { 
    width: 0 
  },
  visible: {
    width: "auto",
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export const drawPath = {
  hidden: { 
    pathLength: 0, 
    opacity: 0 
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export const morphing = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Utility functions
export const createStaggerVariants = (delay = 0.1, duration = 0.5) => ({
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration,
      ease: "easeOut"
    }
  }
})

export const createHoverVariants = (scale = 1.05, duration = 0.2) => ({
  hover: { 
    scale,
    transition: {
      duration,
      ease: "easeOut"
    }
  }
})

export const createTapVariants = (scale = 0.95, duration = 0.1) => ({
  tap: { 
    scale,
    transition: {
      duration
    }
  }
})

// Animation presets for common use cases
export const cardAnimation = {
  ...fadeInUp,
  ...hoverLift,
  ...tapScale
}

export const buttonAnimation = {
  ...hoverScale,
  ...tapScale
}

export const iconAnimation = {
  ...hoverRotate,
  ...tapRotate
}

export const textAnimation = {
  ...fadeInUp,
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
}

export const imageAnimation = {
  ...scaleIn,
  ...hoverScale
}

export const listAnimation = {
  ...staggerContainer,
  ...staggerItem
}