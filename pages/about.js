import { Layout } from '../components';
import { Fade } from 'react-awesome-reveal';
import UseAnimations from 'react-useanimations';

import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  height: 100vh;
  width: 100%;
`;

const Hero = styled.div`
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

const Icons = styled.div`
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

export default function About() {
  return (
    <>
      <Layout title='front-end web designer'>
        <Wrapper id='header'>
          <Hero>
            <div className='container'>
              <div>
                <Fade cascade>
                  <h1>Design e desenvolvimento de produtos digitais.</h1>
                  <h2>
                    Vamos trabalhar juntos para criar algo verdadeiramente
                    único.
                  </h2>
                  <button type='button' aria-label='Iniciar um Projeto'>
                    Iniciar um projeto
                  </button>
                </Fade>
              </div>
            </div>
          </Hero>

          <Icons>
            <div className='networks'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github Link'
                href='https://github.com/viniciusmoreeira'
              >
                <UseAnimations animationKey='github' size={26} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Linkedin Link'
                href='https://www.linkedin.com/in/viniciusmoreeira/'
              >
                <UseAnimations animationKey='linkedin' size={26} />
              </a>
            </div>
          </Icons>
        </Wrapper>
      </Layout>
    </>
  );
}
