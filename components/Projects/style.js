import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

export const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100vh;
  position: relative;

  ${between('ss', 'sm')} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    div :nth-of-type(1) {
      order: 2;
    }
  }

  .left-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: auto;

    ${between('ss', 'sm')} {
      min-height: 40vh;
    }

    div {
      width: 45rem;

      ${down('md')} {
        width: 90%;
      }

      h2 {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.primaryDark};
        width: 100%;
        margin: 1rem 0 2.2rem;
      }

      p {
        font-size: 1.7rem;
        color: #363636;
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }

  .carousel {
    position: unset;

    .react-multi-carousel-track {
      height: 100%;
    }

    img {
      object-fit: cover;
      object-position: center top;

      ${between('ss', 'sm')} {
        height: 50vh;
      }
    }

    .arrows {
      position: absolute;
      bottom: 0;
      left: 50%;
      line-height: 0;
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.primaryLight};
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${between('ss', 'sm')} {
        left: unset;
        right: 0;
        bottom: 40%;
      }

      svg {
        padding: 3rem;
        height: 75px;
        width: 75px;
        cursor: pointer;
        transition: all 0.3s ease-in;

        ${between('ss', 'sm')} {
          left: unset;
          padding: 1.5rem;
          height: 40px;
          width: 40px;
        }
      }
    }
  }

  ${between('ss', 'sm')} {
    min-height: 60vh;
    width: 100%;
  }
`;
