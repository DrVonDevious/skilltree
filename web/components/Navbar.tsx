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
      height={'47px'}
      borderBottom={1}
      borderColor='blackAlpha.300'
      borderStyle='solid'
      align='center'
      py={2}
      px={4}
    >
      <Flex justify={{ base: 'center', md: 'start' }}>
        <Image alt='Skilltrees' alignSelf="center" boxSize='24px' mr={2} src='/logo.svg' />
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontWeight='bold'
          fontSize={20}
          color={useColorModeValue('gray.800', 'white')}
        >
          Skilltrees
        </Text>
      </Flex>
      <Flex flex={1} justifyContent='center'>
        <Input height={8} placeholder='Search' w='70%'/>
      </Flex>
      <Flex>
        { isLoading
          && <SkeletonCircle boxSize={8} />
        }
        { !isLoading && !user
          && <Flex columnGap={2}>
            <a href='/api/auth/login'>
              <Button size="sm" variant='outline'>Sign In</Button>
            </a>
            <a href='/api/auth/login'>
              <Button size="sm">Sign Up</Button>
            </a>
          </Flex>
        }
        { !isLoading && user
          && <Flex columnGap={2}>
            <Avatar alignSelf="center" boxSize={8} src={user.picture} />
            <a href='/api/auth/logout'>
              <IconButton
                variant='ghost'
                aria-label='logout'
                icon={<LogoutRounded />}
              />
            </a>
          </Flex>
        }
      </Flex>
    </Flex>
  );
};

export default Navbar;
