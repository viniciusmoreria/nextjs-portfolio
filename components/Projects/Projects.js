import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import CustomCarousel from '../Carousel/Carousel';

import { StyledProjects } from './style';

class Projects extends Component {
  render() {
    return (
      <StyledProjects id='projects'>
        <div className='left-text'>
          <Fade cascade>
            <p>O que eu posso fazer</p>
            <h2>Projetar o que você deseja.</h2>
            <p>
              Eu gosto de simplificar. Meus objetivos são focar na tipografia,
              no conteúdo e na transmissão da mensagem que você deseja enviar.
            </p>
          </Fade>
        </div>
        <CustomCarousel />
      </StyledProjects>
    );
  }
}

export default Projects;
