import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: relative;

  ${between('ss', 'sm')} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    text-align: center;
    min-height: 115%;
  }

  .left-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    ${between('ss', 'sm')} {
      height: 40vh;
      width: 100%;
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
      }

      p {
        font-size: 1.7rem;
        color: #363636;
        margin-top: 1rem;
      }
    }
  }
`;

export const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1495839760557-d150d64b4469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
    no-repeat center center / cover;
  position: relative;

  ${between('ss', 'sm')} {
    height: 75vh;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45rem;
    text-align: left;

    ${between('sm', 'lg')} {
      width: 35rem;
    }

    ${between('ss', 'sm')} {
      height: 100%;
      width: 70%;
    }

    label {
      font-size: 1.6rem;
      font-weight: normal;
      color: ${({ theme }) => theme.primaryLight};
    }

    span {
      font-size: 1.4rem;
      margin: 0.5rem 0;
      color: #dc4747;
      text-align: center;
    }

    input {
      ${({ theme }) => theme.inputForm};
      box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
    }

    select {
      ${({ theme }) => theme.inputForm};
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
      background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
      background-repeat: no-repeat;
      background-position: right 0.7em top 50%, 0 0;
      background-size: 0.65em auto, 100%;
      margin: 1rem 0;
    }

    textarea {
      ${({ theme }) => theme.inputForm};
      min-height: 257px;
      margin: 1rem 0 0;

      ${between('ss', 'sm')} {
        min-height: 75px;
      }
    }

    button[type='submit'] {
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.primaryLight};
      border-radius: 6px;
      border: none;
      padding: 10px;
      width: 100%;
      font-size: 1.6rem;
      font-weight: normal;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease-in;

      &:hover {
        background-color: #111;
      }
    }
  }

  .buttonUp {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: #111;
    }
  }
`;
