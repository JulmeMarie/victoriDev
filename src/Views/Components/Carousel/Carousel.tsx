import React, { FC } from 'react';
import './Carousel.css';

interface CarouselProps {}

const Carousel: FC<CarouselProps> = () => (
  <div className="Carousel" data-testid="Carousel">
    Carousel Component
  </div>
);

export default Carousel;
