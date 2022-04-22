import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Home from './home';

const Index: FunctionComponent = () => (
  <ChakraProvider>
    <Home />
  </ChakraProvider>
);

export default Index;
