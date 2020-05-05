import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-scroll';

import { StyledBurger, StyledMenu } from './style';

function lockScroll() {
  const body = document.body.style;
  if (body.overflow === '' || body.overflow === 'unset') {
    body.overflow = 'hidden';
  } else {
    body.overflow = 'unset';
  }
}

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
        lockScroll();
      }}
      aria-label='Clique aqui para abrir o Menu'
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export const Menu = ({ open, setOpen }) => {
  return (
    <>
      <StyledMenu open={open}>
        <div className='links'>
          <Link
            to='about'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
              lockScroll();
            }}
          >
            Sobre mim
          </Link>
          <Link
            to='projects'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
              lockScroll();
            }}
          >
            Projetos
          </Link>
          <Link
            to='form'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
              lockScroll();
            }}
          >
            Contato
          </Link>
        </div>
        <img
          src='https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          alt='Textura abstrata branca'
        />
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
