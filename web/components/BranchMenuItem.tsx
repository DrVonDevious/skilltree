import { Flex, IconButton, Text } from '@chakra-ui/react';
import { ExpandCircleDownOutlined } from '@mui/icons-material';
import { FunctionComponent, useState } from 'react';
import { Branch } from '../lib/typings';

type BranchMenuItemProps = {
  branch: Branch,
};

const BranchMenuItem: FunctionComponent<BranchMenuItemProps> = ({ branch }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Flex flexDir="column">
      <Flex borderBottomWidth={1} padding={2} alignItems="center">
        <Text marginLeft={2} marginRight={4} fontWeight="bold" color="gray">
          {branch.position}
        </Text>
        <Text flexGrow={1} fontWeight="bold">{branch.name}</Text>
        <IconButton
          icon={<ExpandCircleDownOutlined />}
          variant="ghost"
          aria-label="expand branch"
          onClick={() => toggleIsExpanded()}
        />
      </Flex>
      {isExpanded && branch.leaves.map((leaf) => (
        <Flex
          key={leaf.id}
          borderBottomWidth={1}
          padding={2}
          alignItems="center"
        >
          <Text marginLeft={6} marginRight={4} fontWeight="bold" color="gray">
            {branch.position}.{leaf.position}
          </Text>
          <Text fontWeight="bold">{leaf.name}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default BranchMenuItem;
