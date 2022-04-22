import { Button, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => (
    <Stack spacing={14} marginY={32} marginLeft="20%" align="start">
      <Heading size='3xl' maxW="70%">Grow your skillset<br/>with Skilltree</Heading>
      <Heading size='lg' maxW="70%">
        Skilltree allows you to find<br/>a roadmap to learn any skill,<br/>or create your own!
      </Heading>
      <Button size="lg" width={48} colorScheme="green">
        <Link href="create-account">
          Sign Up
        </Link>
      </Button>
    </Stack>
);

export default Home;
