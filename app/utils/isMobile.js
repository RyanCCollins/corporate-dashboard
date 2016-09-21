const isMobile = () => {
  if (typeof window === 'undefined') {
    return true;
  }
  return window.innerWidth <= 800;
};

export default isMobile;
