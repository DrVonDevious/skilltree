import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }) => (
  <UserProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </UserProvider>
);

export default App;
