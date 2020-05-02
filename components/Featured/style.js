import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

export const StyledProject = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primaryDark};
  position: relative;

  ${between('ss', 'sm')} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    text-align: center;
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

  .right-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

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
        margin-top: 1rem;
      }
    }
  }
`;
