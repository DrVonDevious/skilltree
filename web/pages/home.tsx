import {
  Flex, Heading,
} from '@chakra-ui/react';
import { FunctionComponent, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { getTrees } from '../lib/requests';

const Home: FunctionComponent = () => {
  useEffect(() => {
    getTrees(10, 0);
  }, []);

  return (
    <Flex direction="column" w='100%' h='100%'>
      <Navbar />
      <Flex flexGrow={1}>
        <Sidebar context='home' />
        <Heading>Trending Skilltrees</Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
