
export const staggeredFadeIn = (delay: number = 0.1) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.215, 0.61, 0.355, 1],
    delay: delay
  }
});

export const fadeIn = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.5,
    ease: [0.215, 0.61, 0.355, 1],
    delay: delay
  }
});

export const slideUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: [0.215, 0.61, 0.355, 1],
    delay: delay
  }
});

export const scaleIn = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.5,
    ease: [0.215, 0.61, 0.355, 1],
    delay: delay
  }
});

export function getScrollAnimation(threshold: number = 0.1) {
  return {
    offScreen: {
      y: 50,
      opacity: 0
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8
      }
    },
    viewport: { once: true, amount: threshold }
  };
}
