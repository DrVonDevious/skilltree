import { Flex, Skeleton } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Tree } from '../lib/typings';

type ExploreTreesListProps = {
  content: Tree[],
};

const ExploreTreesList: FunctionComponent<ExploreTreesListProps> = ({ content }) => (
  <Flex flexDirection='column' alignItems='center'>
    { !content
      && <Skeleton width='80%' height='80px' mt={4} />
    }
    { content && content.map((tree) => (
      <p key={tree.id}>{tree.name}</p>
    ))}
  </Flex>
);

export default ExploreTreesList;
