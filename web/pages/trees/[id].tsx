import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

const TreePage: FunctionComponent = () => {
  const [tree, setTree] = useState(null);

  const router = useRouter();

  const getTree = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/trees/${router.query.id}`,
      );

      setTree(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTree();
  }, []);

  return (
    <Box>
      <Navbar />
      { tree
        ? <></>
        : <Flex>
          <Text>This Tree Is But A Figment Of Your Imagination</Text>
        </Flex>
      }
    </Box>
  );
};

export default TreePage;
