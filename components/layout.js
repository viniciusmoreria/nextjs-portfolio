import React from 'react';
import { NextSeo } from 'next-seo';
import { Link } from 'react-scroll';

import { Nav, Navbar, StyledFooter } from './style';

export default function Layout({ children }) {
  return (
    <>
      <NextSeo
        title='vinícius | front-end web developer'
        description='Design e desenvolvimento de produtos digitais.'
        canonical='https://viniciusmoreeira.now.sh/'
        hrefLang='pt-BR'
        openGraph={{
          url: 'https://viniciusmoreeira.now.sh/',
          title: 'vinícius | front-end web developer',
          description: 'Design e desenvolvimento de produtos digitais.',
          images: [
            {
              url: 'https://i.imgur.com/CDmlNOF.png',
              width: 800,
              height: 600,
              alt: 'Website Logo',
            },
          ],
          site_name: 'vinícius | front-end web developer',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Nav>
        <Navbar>
          <a className='logo' href='/'>
            vinícius
          </a>
          <div className='links'>
            <Link to='about' smooth>
              sobre mim
            </Link>
            <Link to='projects' smooth>
              projetos
            </Link>
            <Link to='form' smooth>
              contato
            </Link>
          </div>
        </Navbar>
      </Nav>

      {children}

      <StyledFooter>
        <div className='icons'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github Link'
            href='https://github.com/viniciusmoreeira'
          >
            github
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin Link'
            href='https://www.linkedin.com/in/viniciusmoreeira/'
          >
            linkedin
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Dribbble Link'
            href='https://dribbble.com/viniciusmoreira'
          >
            dribbble
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Behance Link'
            href='https://www.behance.net/viniciusmoreeira'
          >
            behance
          </a>
        </div>
        <span>
          © {new Date().getFullYear()} Vinícius Moreira. Todos os direitos
          reservados.
        </span>
      </StyledFooter>
    </>
  );
}
