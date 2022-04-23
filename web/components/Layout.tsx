import { FunctionComponent, ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';

type LayoutProps = {
  children: ReactNode,
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Auth0Provider
    domain="dev-henpy40w.us.auth0.com"
    clientId="fRz8lyTVngbp4k4W81vbcoCwCqwuy8uX"
    redirectUri={window.location.origin}
  >
    <ChakraProvider>
      {children}
    </ChakraProvider>
  </Auth0Provider>
);

export default Layout;
