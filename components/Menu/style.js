import styled from 'styled-components';
import { between } from 'styled-breakpoints';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 2.5rem;
    height: 0.1rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 4px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const StyledMenu = styled.menu`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  height: 90%;
  position: fixed;
  top: 55%;
  left: 50%;
  padding: 5% 0;
  background: ${({ theme }) => theme.background};
  transform: translate(-50%, -50%);
  opacity: ${({ open }) => (open ? '1' : '0')};
  visibility: ${({ open }) => (open ? 'show' : 'hidden')};
  transition: all 0.3s ease-in;
  z-index: 10;

  ${between('ss', 'sm')} {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10%;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding-top: 80px;

    :hover > *:not(:hover) {
      color: grey;
    }

    a {
      color: ${({ theme }) => theme.primaryDark};
      font-size: 4rem;
      text-decoration: none;
      padding: 1rem 0;
      transition: color 0.3s linear;
      cursor: pointer;

      ${between('ss', 'sm')} {
        font-size: 3rem;
      }
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;

    ${between('ss', 'sm')} {
      display: none;
    }
  }
`;
