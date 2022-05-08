import { Flex, Skeleton } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Tree } from '../lib/typings';
import ExploreTreeCard from './ExploreTreeCard';

type ExploreTreesListProps = {
  content: Tree[],
};

const ExploreTreesList: FunctionComponent<ExploreTreesListProps> = ({
  content,
}) => (
  <Flex flexDirection='column' alignItems='center' mt={8}>
    { !content
      && <Skeleton width='80%' height='80px' mt={4} />
    }
    { content && content.map((tree) => (
      <ExploreTreeCard key={tree.id} tree={tree} />
    ))}
  </Flex>
);

export default ExploreTreesList;
