import React, { useState, FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  Flex,
  Input,
  Text,
  Button,
  InputGroup,
  Center,
  Container,
  Stack,
  Box,
  Grid,
  GridItem,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import StagePlayerLogo from '../lib/assets/stage_player.svg';

interface LoginProps {
  // onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  error: string;
  isLoading: boolean;
  isViewing: boolean;
}

const Login: FC<LoginProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex height="100vh" direction="column" alignItems="center" justifyContent="center" width="100vw">
      <Container maxW="6xl" my={4}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} justifyContent={{ base: 'center' }}>
          <GridItem display={{ base: 'none', md: 'block' }} colSpan={{ md: 1 }} />

          <GridItem>
            <Center>
              <Image src={StagePlayerLogo} alt="Broadway Media" />
            </Center>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2, lg: 2 }}>
            <Box>
              <form>
                <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
                  <FormControl>
                    <InputGroup>
                      <Input type="email" placeholder="Email" _placeholder={{ fontStyle: 'italic' }} />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <Input type={showPassword ? 'text' : 'password'} placeholder="Password" _placeholder={{ fontStyle: 'italic' }} />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick} variant="transparent">
                          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText textAlign="left">
                      {/* <Link color="dark.500" href="/"> */}
                      <Text as="u">Forgot password?</Text>
                      {/* </Link> */}
                    </FormHelperText>
                  </FormControl>
                </Stack>
                <Flex justifyContent="flex-end" mx={4}>
                  <Link color="dark.900" href="/productions">
                    <Button borderRadius={0} variant="solid" colorScheme="blue" rounded="md">
                      Sign in
                    </Button>
                  </Link>
                </Flex>
              </form>
            </Box>
          </GridItem>
        </Grid>
        <Box mt={16}>
          <Center ml={{ md: 36 }} mr={{ lg: 36, xl: 16 }}>
            <Box>
              <Text textAlign="right" fontSize={{ base: '85%', md: '100%' }}>
                By signing in, you agree to our
              </Text>
              <NextLink href="https://www.broadwaymedia.com/about/terms" passHref>
                <Link color="dark.900" href="/https://www.broadwaymedia.com/about/terms" target="_blank">
                  <span>Terms and Conditions</span>
                </Link>
              </NextLink>
              <Box display={{ base: 'none', md: 'block' }} />
              and our{' '}
              <NextLink href="https://www.broadwaymedia.com/resources/eucrla" passHref>
                <Link color="dark.500" href="https://www.broadwaymedia.com/resources/eucrla" target="_blank">
                  <Text as="u"> End User License Agreement</Text>
                </Link>
              </NextLink>
              .
            </Box>
          </Center>
        </Box>
      </Container>
    </Flex>
  );
};

export default Login;
