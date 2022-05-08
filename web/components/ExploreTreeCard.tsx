import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Tree } from '../lib/typings';

interface ExploreTreeCardProps {
  tree: Tree,
}

const ExploreTreeCard: FunctionComponent<ExploreTreeCardProps> = ({ tree }) => (
  <Box width='100%' cursor="pointer">
    <Link href={`/trees/${tree.id}`}>
      <Flex
        borderWidth={1}
        borderColor='blackAlpha.300'
        borderRadius={4}
        padding={4}
        flexDirection='column'
      >
        <Text fontSize='xl' fontWeight='bold'>{tree.name}</Text>
        <Text>{tree.description}</Text>
      </Flex>
    </Link>
  </Box>
);

export default ExploreTreeCard;
