import {
  Button, Flex, Image, Input, Text, useBreakpointValue, useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Navbar: FunctionComponent = () => (
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
      <Image alt='Skilltree' boxSize='30px' mr={2} src='logo.svg' />
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
    <Flex
      columnGap={2}
    >
      <Link href='/api/auth/login' passHref>
        <Button variant='outline'>Sign In</Button>
      </Link>
      <Link href='/api/auth/login' passHref>
        <Button>Sign Up</Button>
      </Link>
    </Flex>
  </Flex>
);

export default Navbar;
