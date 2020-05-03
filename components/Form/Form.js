import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import LazyLoad from 'react-lazyload';

import { Container, StyledForm } from './style';

export default function Form() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
  });

  const handleResponse = (status) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
      });
      reset();
    }
  };

  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async (data) => {
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <Container id='form'>
      <div className='left-text'>
        <div>
          <h2>Vamos começar um projeto juntos?</h2>
          <p>Me conte sobre seu projeto e eu entrarei em contato em seguida.</p>
        </div>
      </div>

      <LazyLoad height={200} offset={280}>
        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='nome'>
              <input
                type='text'
                placeholder='Nome'
                name='nome'
                ref={register({ required: true, maxLength: 80 })}
              />
            </label>
            <span>{errors.nome && 'Por favor informar seu nome'}</span>

            <label htmlFor='email'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
            </label>
            <span>{errors.email && 'Por favor informar seu email'}</span>

            <label>
              Já possui um design?
              <select name='design' ref={register({ required: true })}>
                <option value='Sim'>Sim</option>
                <option value='Não'>Não</option>
              </select>
            </label>

            <label>
              Número de páginas do projeto
              <select name='pages' ref={register({ required: true })}>
                <option value='01'>01</option>
                <option value='02'>02</option>
                <option value='03'>03</option>
                <option value='04'>04</option>
                <option value='05'>05</option>
                <option value='06'>06</option>
                <option value='+07'>+07</option>
              </select>
            </label>

            <label>
              Mensagem
              <textarea name='mensagem' ref={register({ required: true })} />
            </label>
            <span>{errors.mensagem && 'Por favor detalhar seu projeto'}</span>

            <button
              type='submit'
              name='Enviar mensagem'
              disabled={status.submitting}
            >
              {!status.submitting
                ? !status.submitted
                  ? 'Enviar mensagem'
                  : 'Enviado com sucesso!'
                : 'Enviando...'}
            </button>
          </form>

          <Link className='buttonUp' to='header' smooth>
            <FaArrowUp />
          </Link>
        </StyledForm>
      </LazyLoad>
    </Container>
  );
}
