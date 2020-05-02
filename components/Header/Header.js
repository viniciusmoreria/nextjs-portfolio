import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import UseAnimations from 'react-useanimations';
import Lottie from './Lottie';

import { Wrapper, Hero, Icons } from './style';

function Header() {
  return (
    <Wrapper id='header'>
      <Hero>
        <div className='container'>
          <div>
            <Fade cascade>
              <h1>Design e desenvolvimento de produtos digitais.</h1>
              <h2>
                Vamos trabalhar juntos para criar algo verdadeiramente único.
              </h2>
              <Link to='form' smooth duration={1500}>
                <button type='button' aria-label='Iniciar um Projeto'>
                  Iniciar um projeto
                </button>
              </Link>
            </Fade>
          </div>
          <Lottie />
        </div>
      </Hero>

      <Icons>
        <div className='networks'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Gitub Link'
            href='https://github.com/viniciusmoreeira'
          >
            <UseAnimations animationKey='github' size={26} />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin Link'
            href='https://www.linkedin.com/in/viniciusmoreeira/'
          >
            <UseAnimations animationKey='linkedin' size={26} />
          </a>
        </div>

        <div className='scroll'>
          <UseAnimations animationKey='arrowDown' size={22} />
          <Link to='projects' smooth>
            <span>descer</span>
          </Link>
        </div>
      </Icons>
    </Wrapper>
  );
}

export default Header;
