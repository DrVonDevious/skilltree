import { Box, Flex, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Tree } from '../lib/typings';

interface ExploreTreeCardProps {
  tree: Tree,
}

const ExploreTreeCard: FunctionComponent<ExploreTreeCardProps> = ({ tree }) => (
  <Box width='100%'>
    <a href={`/trees/${tree.id}`}>
      <Flex borderWidth={1} borderRadius={4} padding={4} flexDirection='column'>
        <Text>{tree.name}</Text>
        <Text>{tree.description}</Text>
      </Flex>
    </a>
  </Box>
);

export default ExploreTreeCard;
