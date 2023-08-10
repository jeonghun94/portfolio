export const containerVariants = {
  start: { opacity: 1, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const linkVariants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
  },
};
