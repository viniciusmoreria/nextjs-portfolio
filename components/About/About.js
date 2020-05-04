import React from 'react';
import LazyLoad from 'react-lazyload';
import { Fade } from 'react-awesome-reveal';

import { StyledAbout } from './style';

const About = () => {
  return (
    <StyledAbout id='about'>
      <LazyLoad height={200} offset={280}>
        <img
          src='https://images.unsplash.com/photo-1528372444006-1bfc81acab02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
          alt='Work Desktop Picture'
        />
      </LazyLoad>
      <div className='right-text'>
        <Fade cascade>
          <h2>Olá!</h2>

          <p>
            Meu nome é Vinícius. Gosto de criar coisas que vivem na internet,
            sejam sites ou aplicativos, com foco em design responsivo. Você
            consegue baixar meu currículo clicando{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Meu Currículo'
              href='https://viniciusmoreeira.now.sh/resume.pdf'
            >
              aqui
            </a>
            .
          </p>
        </Fade>
      </div>
    </StyledAbout>
  );
};

export default About;
