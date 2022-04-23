import singletonRouter from 'next/router';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../pages/home';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

beforeEach(() => {
  mockRouter.setCurrentUrl('/');
  render(<Home />)
});

describe('Index', () => {
  it('renders a heading', () => {
    const heading = screen.getByRole("heading", {
      name: "Grow your skillset with Skilltree",
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders a sub-heading', () => {
    const subheading = screen.getByRole("heading", {
      name: "Skilltree allows you to find a roadmap to learn any skill, or create your own!",
    });

    expect(subheading).toBeInTheDocument();
  });

  it('renders a button for signing into an account', () => {
    const registerButton = screen.getByRole("button", {
      name: "Sign In",
    });

    expect(registerButton).toBeInTheDocument();
  });

  it('register button sends user to register page', () => {
    const registerLink = screen.getByRole("link", {
      name: "Sign In",
    });

    expect(registerLink).toBeInTheDocument();

    fireEvent.click(registerLink);

    expect(singletonRouter).toMatchObject({ asPath: '/' });
  });
});
