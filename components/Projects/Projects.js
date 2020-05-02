import React, { Component } from 'react';

import CustomCarousel from '../Carousel/Carousel';

import { StyledProjects } from './style';

class Projects extends Component {
  render() {
    return (
      <StyledProjects id='projects'>
        <div className='left-text'>
          <div>
            <h2>Projetar o que você deseja.</h2>
            <p>
              Eu gosto de simplificar. Meus objetivos são focar na tipografia,
              no conteúdo e na transmissão da mensagem que você deseja enviar.
            </p>
          </div>
        </div>
        <CustomCarousel />
      </StyledProjects>
    );
  }
}

export default Projects;
