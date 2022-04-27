import singletonRouter from 'next/router';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/home';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import { UserProvider } from '@auth0/nextjs-auth0';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

beforeEach(async () => {
  mockRouter.setCurrentUrl('/');
  await waitFor(() => {
    render(
      <UserProvider>
        <Home />
      </UserProvider>
    );
  });
});

describe('Index', () => {
  it('register button sends user to register page', () => {
    const registerLink = screen.getByTestId("home-register-button");

    expect(registerLink).toBeInTheDocument();

    fireEvent.click(registerLink);

    expect(singletonRouter).toMatchObject({ asPath: '/' });
  });
});
