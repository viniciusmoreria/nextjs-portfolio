import React from 'react';
import LazyLoad from 'react-lazyload';

import { StyledProject } from './style';

const Featured = () => {
  return (
    <StyledProject>
      <LazyLoad height={200} offset={250}>
        <img src='http://placehold.jp/720x540.png' alt='Featured Project' />
      </LazyLoad>
      <div className='right-text'>
        <div>
          <h2>Desenvolver o que você precisa.</h2>
          <p>
            Como desenvolvedor, sei como criar seu site para rodar em
            dispositivos usando as tecnologias mais recentes disponíveis.
          </p>
        </div>
      </div>
    </StyledProject>
  );
};

export default Featured;
