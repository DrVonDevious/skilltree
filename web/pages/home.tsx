import {
  Box,
  Flex, Heading,
} from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from 'react';
import ExploreTreesList from '../components/ExploreTreesList';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { getTrees } from '../lib/requests';
import { Tree } from '../lib/typings';

const Home: FunctionComponent = () => {
  const [trees, setTrees] = useState<Tree[]>([]);

  const fetchTrees = async () => {
    setTrees(await getTrees(10, 0));
  };

  useEffect(() => {
    fetchTrees();
  }, []);

  return (
    <Flex direction="column" w='100%' h='100%'>
      <Navbar />
      <Flex flexGrow={1}>
        <Sidebar context='home' />
        <Box margin='48px 24px' width='100%' textAlign='center'>
          <Heading>Explore Skilltrees</Heading>
          <ExploreTreesList content={trees} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
