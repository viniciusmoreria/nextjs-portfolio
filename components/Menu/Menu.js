import React from 'react';
import { bool, func } from 'prop-types';

import { StyledMenu, StyledBurger } from './style';

export const Burger = ({ open, setOpen }) => {
  function lockScroll() {
    const body = document.body.style;
    if (body.overflow === '' || body.overflow === 'unset') {
      body.overflow = 'hidden';
    } else {
      body.overflow = 'unset';
    }
  }
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
        lockScroll();
      }}
      aria-label='Menu Hamburguer'
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

export const Menu = ({ open }) => {
  return (
    <>
      <StyledMenu open={open}>
        <div className='links'>
          <a href='/about'>Sobre mim</a>
          <a href='/'>Projetos</a>
          <a href='/'>Contato</a>
        </div>
        <img
          src='https://images.unsplash.com/photo-1528372444006-1bfc81acab02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
          alt='Imagem de uma mesa de trabalho'
        />
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
