import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollTop.css';

interface ScrollTopProps { }

const ScrollTop: FC<ScrollTopProps> = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return null;
}

export default ScrollTop;
