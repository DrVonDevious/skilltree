import { Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store';
import HomeSidebarContent from './HomeSidebarContent';
import TreeSidebarContent from './TreeSidebarContent';

const Sidebar: FunctionComponent = () => {
  const context = useSelector((state: RootState) => state.navigation.context);
  const branches = useSelector(
    (state: RootState) => state.tree.currentTreeBranches,
  );

  return (
    <Flex
      display={context === 'none' ? 'none' : 'flex'}
      h='100%'
      w="280px"
      borderRightWidth={1}
      borderRightColor='blackAlpha.300'
    >
      { context === 'home'
        && <HomeSidebarContent />
      }
      { context === 'tree'
        && <TreeSidebarContent branches={branches} />
      }
    </Flex>
  );
};

export default Sidebar;
