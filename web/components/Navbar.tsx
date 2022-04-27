import { useUser } from '@auth0/nextjs-auth0';
import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  SkeletonCircle,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { LogoutRounded } from '@mui/icons-material';
import { FunctionComponent } from 'react';

const Navbar: FunctionComponent = () => {
  const { user, isLoading } = useUser();

  return (
    <Flex
      minH={'64px'}
      borderBottom={1}
      borderColor='blackAlpha.300'
      borderStyle='solid'
      align='center'
      py={2}
      px={4}
    >
      <Flex justify={{ base: 'center', md: 'start' }}>
        <Image alt='Skilltree' boxSize='30px' mr={2} src='/logo.svg' />
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontWeight='bold'
          fontSize={20}
          color={useColorModeValue('gray.800', 'white')}
        >
          Skilltree
        </Text>
      </Flex>
      <Flex flex={1} justifyContent='center'>
        <Input placeholder='Search' w='70%'/>
      </Flex>
      <Flex>
        { isLoading
          && <SkeletonCircle boxSize={10} />
        }
        { !isLoading && !user
          && <Flex columnGap={2}>
            <a href='/api/auth/login'>
              <Button variant='outline'>Sign In</Button>
            </a>
            <a href='/api/auth/login'>
              <Button>Sign Up</Button>
            </a>
          </Flex>
        }
        { !isLoading && user
          && <Flex columnGap={2}>
            <Avatar boxSize={10} src={user.picture} />
            <IconButton aria-label='logout' icon={<LogoutRounded />} />
          </Flex>
        }
      </Flex>
    </Flex>
  );
};

export default Navbar;
