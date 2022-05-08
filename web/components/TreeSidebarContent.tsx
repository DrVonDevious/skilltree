import { Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Branch } from '../lib/typings';
import BranchMenuItem from './BranchMenuItem';

type TreeSidebarContentProps = {
  branches: Branch[],
};

const TreeSidebarContent: FunctionComponent<TreeSidebarContentProps> = ({
  branches,
}) => (
  <Flex flexDir="column" w="100%">
    {branches.map((branch) => (
      <BranchMenuItem branch={branch} key={branch.id} />
    ))}
  </Flex>
);

export default TreeSidebarContent;
