import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps }) => (
  <UserProvider>
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  </UserProvider>
);

export default App;
