import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Container,
  Box,
  Link,
  Grid,
  GridItem,
  Stack,
  HStack,
  VStack,
  AspectRatio,
  Img,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { TbFilter } from 'react-icons/tb';
import Layout from '../components/Layout';

const dropData = [
  {
    id: '13',
    name: '50s Diner (Day, Exterior)',
    previewVideo:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm',
    type: 'drops',
  },
  {
    id: '64',
    name: 'Neon Signs - Warm',
    previewVideo:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm',
    type: 'drops',
  },
  {
    id: '84',
    name: 'School Dance in the Auditorium (Evening, Interior)',
    previewVideo:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm',
    type: 'drops',
  },
  {
    id: '204',
    name: 'Fireworks in a Purple Sky (Night, Exterior)',
    previewVideo:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm',
    type: 'drops',
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>StagePlayer Web</title>
        <meta name="description" content="Your source for professional-quality digital backdrops" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <VStack spacing={8}>
          <Container maxW="6xl">
            <Text textAlign="left" fontSize="2xl">
              Your source for professional-quality digital backdrops
            </Text>
            <Text fontSize="md">
              Prepare your mind to be blown.{' '}
              <NextLink href="/login" passHref>
                <Link color="blue.500">Click Here</Link>
              </NextLink>{' '}
              to peruse our subscription options.
            </Text>
          </Container>
          <Container maxW="6xl">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search our collection" />
              <HStack>
                <Icon as={TbFilter} h={8} w={8} />
                <Button colorScheme="blue" size="sm">
                  Search
                </Button>
              </HStack>
            </InputGroup>
          </Container>
          <Container maxW="6xl">
            <Text fontSize="xl" textAlign="left">
              Featured Backdrops
            </Text>

            <Text fontSize="md">Popular</Text>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} style={{ width: '130%' }}>
              {dropData.map((drop) => (
                <GridItem key={drop.id}>
                  <video style={{ width: '100%' }} src={drop.previewVideo} controls />
                </GridItem>
              ))}
            </Grid>
            <Text fontSize="md">Recently Added</Text>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} style={{ width: '130%' }}>
              {dropData.map((drop) => (
                <GridItem key={drop.id}>
                  <video style={{ width: '100%' }} src={drop.previewVideo} controls />
                </GridItem>
              ))}
            </Grid>
            <Text fontSize="md">Photo Real</Text>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} style={{ width: '130%' }}>
              {dropData.map((drop) => (
                <GridItem key={drop.id}>
                  <video style={{ width: '100%' }} src={drop.previewVideo} controls />
                </GridItem>
              ))}
            </Grid>
            <Text fontSize="md">Premium Backdrops</Text>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} style={{ width: '130%' }}>
              {dropData.map((drop) => (
                <GridItem key={drop.id}>
                  <video style={{ width: '100%' }} src={drop.previewVideo} controls />
                </GridItem>
              ))}
            </Grid>
          </Container>
        </VStack>
      </main>
      <footer></footer>
    </Layout>
  );
};

export default Home;
