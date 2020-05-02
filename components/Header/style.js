import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
  width: 100%;
`;

export const Hero = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  margin: auto;
  position: relative;

  .container {
    display: grid;
    grid-template-columns: 1.8fr 1.2fr;
    align-items: center;

    ${down('sm')} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 300px;
      text-align: center;
    }
  }

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryDark};
    margin-top: 5rem;

    ${between('md', 'lg')} {
      font-size: 4rem;
    }

    ${between('sm', 'md')} {
      font-size: 3.6rem;
    }

    ${between('ss', 'sm')} {
      font-size: 3.6rem;
      margin-top: 10rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: normal;
    color: ${({ theme }) => theme.primaryDark};
    margin: 3.5rem auto;

    ${between('md', 'lg')} {
      font-size: 1.6rem;
    }
  }

  button {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.primaryLight};
    background: ${({ theme }) => theme.accent};
    padding: 1.5rem 2rem;
    border-radius: 6px;
    transition: all 0.3s ease-in;

    ${between('md', 'lg')} {
      font-size: 1.6rem;
    }

    &:hover {
      background: #3291ff;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  margin: 3.6rem auto;

  .networks {
    ${({ theme }) => theme.flex};

    a {
      color: ${({ theme }) => theme.primaryDark};
      text-decoration: none;
      margin-right: 2.5rem;
    }
  }

  .scroll {
    ${({ theme }) => theme.flex};
    color: ${({ theme }) => theme.primaryDark};

    span {
      margin-left: 1rem;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
`;
