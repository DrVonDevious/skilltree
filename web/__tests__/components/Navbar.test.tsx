import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';
import { UserProvider } from "@auth0/nextjs-auth0";

describe('Navbar', () => {
  beforeEach(async () => {
    await waitFor(() => {
      render(
        <UserProvider>
          <Navbar />
        </UserProvider>
      );
    });
  });

  it('renders a logo in the navbar', () => {
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
  });
});
