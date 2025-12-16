import { initProducts } from "./product-handlers";
import { refs } from "./product-refs";
// import { mobile, tablet, desctop } from "./product-refs"


const BREAKPOINTS = {
        mobile: 375,
        tablet: 768,
        desktop: 1440,
};
export const getScreenType = () => {
  const width = window.innerWidth;

  if (width >= 1440) return 'desktop';
  if (width >= 768) return 'tablet';
  return 'mobile';
};

export const getLimitByScreenType = (screenType) => {
    switch (screenType) {
        case 'desktop':
        return 9;
        case 'tablet':
        case 'mobile':
        default:
        return 8;
    }
}

// Без debounce буде 100+ запитів при resize
export const debounce = (fn, delay = 300) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
