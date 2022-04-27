import {
  Box, Button, Heading, Stack,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Navbar from '../components/Navbar';

const Home: FunctionComponent = () => (
  <Box>
    <Navbar />
    <Stack spacing={14} marginY={32} marginLeft="20%" align="start">
      <Heading size='3xl' maxW="70%">Grow your skillset<br/>with Skilltree</Heading>
      <Heading size='lg' maxW="70%">
        Skilltree allows you to find<br/>a roadmap to learn any skill,<br/>or create your own!
      </Heading>
      {/* @ts-ignore */}
      <a href="/api/auth/login" data-testid="home-register-button">
        <Button size="lg" width={48} colorScheme="green">
          Sign In
        </Button>
      </a>
    </Stack>
  </Box>
);

export default Home;
