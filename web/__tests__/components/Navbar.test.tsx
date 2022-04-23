import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('renders a logo in the navbar', () => {
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
  });
  
  it('renders a search input in the navbar', () => {
    const search = screen.getByRole('textbox');
    expect(search).toBeInTheDocument();
  });

  it('renders a sign in button in the navbar', () => {
    const button = screen.getByRole('button', { name: 'Sign In' });
    expect(button).toBeInTheDocument();
  });

  it('renders a sign up button in the navbar', () => {
    const button = screen.getByRole('button', { name: 'Sign Up' });
    expect(button).toBeInTheDocument();
  });
});
