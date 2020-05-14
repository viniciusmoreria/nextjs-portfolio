import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import LazyLoad from 'react-lazyload';
import Image from './image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0b45db96853759.5eb80d310d1c8.png',
  'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3c80b197047723.5ebc2696bec3a.png',
];

const sites = [
  'https://even-landing-page.now.sh/',
  'https://viniciusmoreeira.github.io/tindog/',
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
          <a href={sites[0]} target='_blank' rel='noopener noreferrer'>
            <Image url={images[0]} alt={images[0]}></Image>
          </a>

          <a href={sites[1]} target='_blank' rel='noopener noreferrer'>
            <Image url={images[1]} alt={images[1]}></Image>
          </a>
        </Carousel>
      </LazyLoad>
    );
  }
}

export default CustomCarousel;
