import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

export const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 7%;
  background-color: ${({ theme }) => theme.primaryLight};
  position: relative;

  ${between('ss', 'sm')} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
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
        color: ${({ theme }) => theme.primaryDark};
        width: 100%;
        margin-bottom: 2.2rem;
      }

      p {
        font-size: 1.7rem;
        color: #363636;
        text-align: justify;
        text-justify: inter-word;
      }

      a {
        color: ${({ theme }) => theme.accent};
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
    user-select: none;

    ${between('ss', 'sm')} {
      height: 50vh;
    }
  }
`;
