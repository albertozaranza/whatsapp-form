import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import GlobalStyle from './styles/global';

import TextInput from './components/TextInput';

import icWhatsApp from './assets/icWhatsApp.svg';
import backgroundImage from './assets/background-whatsapp.jpg';

interface TextInputProps {
  label: string;
  id: string;
}

const form: Array<TextInputProps> = [
  { label: 'Nome', id: 'name' },
  { label: 'Bairro', id: 'neighborhood' },
  { label: 'Rua', id: 'street' },
  { label: 'Número', id: 'number' },
];

const App: React.FC = () => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <StyledContainer>
      <GlobalStyle />
      <h1>WhatsApp Form</h1>
      <form onSubmit={handleSubmit}>
        {form.map(({ label, id }) => (
          <TextInput label={label} id={id} />
        ))}
        <button type="submit">
          <img src={icWhatsApp} alt="WhatsApp Icon" />
          Iniciar atendimento
        </button>
      </form>
      <StyledEmptyTag />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  padding: 32px;
  background-image: url(${backgroundImage});
  background-size: cover;

  h1 {
    padding: 16px 32px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    border-radius: 8px;
  }

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      margin: 8px 0;
      color: #fff;

      p {
        margin-left: 4px;
      }

      input {
        height: 40px;
        margin: 4px 0;
        padding: 8px;
        border: 1px solid #fff;
        border-radius: 4px;
      }
    }

    button {
      display: flex;
      height: 40px;
      justify-content: center;
      align-items: center;
      margin-top: 16px;
      background-color: #25d366;
      color: #fff;
      font-size: 14px;
      border: none;
      border-radius: 4px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      transition: all 300ms;

      img {
        margin-right: 8px;
      }

      &:hover {
        background-color: ${darken(0.05, '#25d366')};
      }

      &:active {
        transform: translate(0.5px, 2px);
      }
    }
  }
`;

const StyledEmptyTag = styled.div``;

export default App;
