import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

export const StyledProject = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryLight};
  position: relative;

  ${between('ss', 'sm')} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    text-align: center;
  }

  .right-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.primaryDark};

    ${between('ss', 'sm')} {
      height: 50vh;
    }

    div {
      width: 41rem;

      ${down('md')} {
        width: 90%;
      }

      h2 {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.primaryLight};
        width: 100%;
      }

      p {
        font-size: 1.7rem;
        color: #777777;
        margin-top: 2rem;
      }

      a {
        margin-left: 5px;
        text-decoration: none;
        color: ${({ theme }) => theme.primaryLight};
        cursor: pointer;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    user-select: none;

    ${between('ss', 'sm')} {
      height: 50vh;
    }
  }
`;
