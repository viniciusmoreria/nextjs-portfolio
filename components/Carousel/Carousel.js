import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import LazyLoad from 'react-lazyload';
import Image from './image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  'http://placehold.jp/720x540.png',
  'http://placehold.jp/720x540.png',
  'http://placehold.jp/720x540.png',
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div className='arrows'>
      <FaArrowLeft className='left' onClick={previous} size={16} />
      <FaArrowRight className='right' onClick={next} size={16} />
    </div>
  );
};

class CustomCarousel extends Component {
  render() {
    return (
      <LazyLoad height={200} offset={100}>
        <Carousel
          responsive={responsive}
          ssr
          infinite={true}
          arrows={false}
          customButtonGroup={<CustomButtonGroupAsArrows />}
          containerClass='carousel'
          itemClass='carousel-item'
        >
          {images.map((image) => {
            return <Image key='key' url={image} alt={image} />;
          })}
        </Carousel>
      </LazyLoad>
    );
  }
}

export default CustomCarousel;
