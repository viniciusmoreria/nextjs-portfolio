import React from 'react';
import LazyLoad from 'react-lazyload';
import { Fade } from 'react-awesome-reveal';

import { StyledProject } from './style';

const Featured = () => {
  return (
    <StyledProject>
      <LazyLoad height={200} offset={280}>
        <img
          src='https://cdn.dribbble.com/users/1553101/screenshots/4585382/dribbble_post.png'
          alt='Featured Project'
        />
      </LazyLoad>
      <div className='right-text'>
        <Fade cascade>
          <h2>Desenvolver o que você precisa.</h2>
          <p>
            Como desenvolvedor, sei como criar seu site para rodar em
            dispositivos usando as tecnologias mais recentes disponíveis.
          </p>
        </Fade>
      </div>
    </StyledProject>
  );
};

export default Featured;
