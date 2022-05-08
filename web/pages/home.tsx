import {
  Box,
  Flex, Heading,
} from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from 'react';
import ExploreTreesList from '../components/ExploreTreesList';
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
    <Flex w='100%' justifyContent='center'>
      <Box margin='48px 24px' maxW='960px' width='100%' textAlign='center'>
        <Heading>Explore Skilltrees</Heading>
        <ExploreTreesList content={trees} />
      </Box>
    </Flex>
  );
};

export default Home;
