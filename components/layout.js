import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

import { Menu, Burger } from './Menu';
import { Nav, Navbar, StyledFooter } from './style';

export default function Layout({ children, title = '' }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate='vinícius | %s'
        description='Design e desenvolvimento de produtos digitais.'
        canonical='https://test-two-dusky.now.sh'
        hrefLang='pt-BR'
        openGraph={{
          url: 'https://test-two-dusky.now.sh',
          title: 'vinícius | front-end web developer',
          description: 'Design e desenvolvimento de produtos digitais.',
          images: [
            {
              url: 'https://i.imgur.com/dL8KN3l.jpg',
              width: 800,
              height: 600,
              alt: 'Website',
            },
            {
              url: 'https://i.imgur.com/dL8KN3l.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://i.imgur.com/dL8KN3l.jpg' },
            { url: 'https://i.imgur.com/dL8KN3l.jpg' },
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
          <Burger open={open} setOpen={setOpen} />
        </Navbar>
      </Nav>

      <Menu open={open} setOpen={setOpen} />

      {children}

      <StyledFooter>
        <div className='icons'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/viniciusmoreeira'
          >
            github
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/viniciusmoreeira/'
          >
            linkedin
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://dribbble.com/viniciusmoreira'
          >
            dribbble
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
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
