import { useUser } from '@auth0/nextjs-auth0';
import {
  Box, Button, Heading, Stack,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Navbar from '../components/Navbar';
import Home from './home';

const Index: FunctionComponent = () => {
  const { user, isLoading } = useUser();

  return (
    <Box w="100vw" h="100vh">
      { isLoading
        && <></>
      }
      { !isLoading && user
        && <Home />
      }
      { !isLoading && !user
        && <Box>
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
      }
    </Box>
  );
};

export default Index;
