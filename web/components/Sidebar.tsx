import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { FunctionComponent, useState } from 'react';
import HomeSidebarContent from './HomeSidebarContent';
import TreeSidebarContent from './TreeSidebarContent';

type SidebarProps = {
  context: string
};

const Sidebar: FunctionComponent<SidebarProps> = ({ context }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex h='100%' flexDir="row">
      { !isOpen
        && <Box height='100%' width="60px" borderRightColor="blackAlpha.300" borderRightWidth={1} borderRightStyle="solid">
        </Box>
      }
      { isOpen
        && <Box height='100%' width={80} borderRightColor="blackAlpha.300" borderRightWidth={1} borderRightStyle="solid">
          { context === 'home'
            && <HomeSidebarContent />
          }
          { context === 'tree'
            && <TreeSidebarContent />
          }
        </Box>
      }
      <IconButton
        aria-label="toggle sidebar"
        onClick={() => toggleSidebar()}
        variant="ghost"
        margin={2}
        icon={isOpen ? <ChevronLeftRounded /> : <ChevronRightRounded />}
      />
    </Flex>
  );
};

export default Sidebar;
