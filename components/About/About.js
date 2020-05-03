import React from 'react';
import LazyLoad from 'react-lazyload';

import { StyledProject } from './style';

const About = () => {
  return (
    <StyledProject id='about'>
      <LazyLoad height={200} offset={280}>
        <img
          src='https://images.unsplash.com/photo-1528372444006-1bfc81acab02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
          alt='Work Desktop Picture'
        />
      </LazyLoad>
      <div className='right-text'>
        <div>
          <h2>Olá!</h2>

          <p>
            Meu nome é Vinícius. Gosto de criar coisas que vivem na internet,
            sejam sites ou aplicativos, com foco em design responsivo.
          </p>

          <p>
            Você consegue baixar meu currículo clicando
            <a
              href='https://github.com/viniciusmoreeira/nextjs-portfolio/tree/master/public/resume.pdf'
              alt='Download do meu currículo'
            >
              aqui
            </a>
            .
          </p>
        </div>
      </div>
    </StyledProject>
  );
};

export default About;
