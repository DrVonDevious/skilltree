import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setContext } from '../../lib/slices/navigation';
import { setCurrentTreeBranches } from '../../lib/slices/tree';
import { Tree } from '../../lib/typings';

const TreePage: FunctionComponent = () => {
  const [tree, setTree] = useState<Tree | null>(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const getTree = async () => {
    try {
      const treeResponse = await fetch(
        `${process.env.API}/trees/${router.query.id}`,
      );

      setTree(await treeResponse.json());

      const branchesResponse = await fetch(
        `${process.env.API}/trees/${router.query.id}/branches`,
      );

      dispatch(setCurrentTreeBranches(await branchesResponse.json()));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTree();
    dispatch(setContext('tree'));
  }, []);

  return (
    <Box>
      { tree
        ? <Flex>
          {tree.name}
        </Flex>
        : <Flex>
          <Text>This Tree Is But A Figment Of Your Imagination</Text>
        </Flex>
      }
    </Box>
  );
};

export default TreePage;
