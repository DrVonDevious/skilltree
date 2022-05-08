import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import store from '../lib/store';

const App = ({ Component, pageProps }) => (
    <UserProvider>
      <ChakraProvider>
        <Provider store={store} >
          <Flex flexDir="column" w="100vw" h="100vh">
            <Navbar />
            <Flex direction="row" w='100%' h='100%'>
              <Sidebar />
              <Component {...pageProps} />
            </Flex>
          </Flex>
        </Provider>
      </ChakraProvider>
    </UserProvider>
);

export default App;
