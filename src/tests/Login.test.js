import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const email = 'email@email.com';
it('', () => {
  renderWithRouterAndRedux(<App />);
  const inputEmail = screen.getByRole('textbox', {
    name: /email/i,
  });
  const inputPassword = screen.getByText(/senha/i);
  expect(inputEmail).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
  const btn = screen.getByRole('button', {
    name: /entrar/i,
  });
  expect(btn).toBeDisabled();
  userEvent.type(inputEmail, 'email@email.com');
  userEvent.type(inputPassword, '123456');
  expect(btn).not.toBeDisabled();
});

it('', async () => {
  const { history } = renderWithRouterAndRedux(<App />);
  const inputEmail = screen.getByRole('textbox', {
    name: /email/i,
  });
  const btn = screen.getByRole('button', {
    name: /entrar/i,
  });
  const inputPassword = screen.getByText(/senha/i);
  userEvent.type(inputEmail, email);
  expect(inputEmail).toHaveValue(email);
  userEvent.type(inputPassword, '123456');

  userEvent.click(btn);
  expect(await screen.findByText(/email@email\.com/i)).toBeInTheDocument();
  const { pathname } = history.location;
  expect(pathname).toBe('/carteira');
  expect(screen.getByText(/0\.00/i)).toBeInTheDocument();
  expect(screen.getByText(/brl/i)).toBeInTheDocument();
  expect(screen.getByText(/valor:/i)).toBeInTheDocument();
  expect(screen.getByText(/valor:/i)).toBeInTheDocument();
  expect(
    screen.getByRole('combobox', {
      name: /moeda:/i,
    }),
  ).toBeInTheDocument();
});

it('', async () => {
  renderWithRouterAndRedux(<App />);
  const inputEmail = screen.getByRole('textbox', {
    name: /email/i,
  });
  const btn = screen.getByRole('button', {
    name: /entrar/i,
  });
  const inputPassword = screen.getByText(/senha/i);
  userEvent.type(inputEmail, email);
  expect(inputEmail).toHaveValue(email);
  userEvent.type(inputPassword, '123456');

  userEvent.click(btn);

  const inputValue = await screen.findByLabelText('Valor:', { selector: 'input' });

  const inputDescription = screen.getByRole('textbox', {
    name: /descrição:/i,
  });

  const btnAdd = screen.getByRole('button', {
    name: /adicionar despesa/i,
  });
  expect(inputValue).toBeInTheDocument();
  expect(inputDescription).toBeInTheDocument();
  userEvent.type(inputValue, '10');
  userEvent.click(btnAdd);
  expect(await screen.findByText(/51\.36/i)).toBeInTheDocument();
});
