/* eslint-disable jsx-a11y/media-has-caption */
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { Container, Link, Grid, GridItem, HStack, VStack, InputGroup, InputLeftElement, Input, Button, Text, Icon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { TbFilter } from 'react-icons/tb';
// @ts-ignore
import Layout from '../components/Layout.tsx';

const dropData = [
  {
    id: '13',
    name: '50s Diner (Day, Exterior)',
    image:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp',
    previewVideo:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm',
    type: 'drops',
  },
  {
    id: '64',
    name: 'Neon Signs - Warm',
    image:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d60fa5d7e05f2761ce5948d43c3ab4511f2fd424/400A-thumbnail.webp',
    previewVideo:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm',
    type: 'drops',
  },
  {
    id: '84',
    name: 'School Dance in the Auditorium (Evening, Interior)',
    image:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzdkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--349c0bc6a117a0834c15b9d89de018519857614e/061D-thumbnail.webp',
    previewVideo:
      'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm',
    type: 'drops',
  },
  // {
  //   id: '204',
  //   name: 'Fireworks in a Purple Sky (Night, Exterior)',
  //   image: 'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcURaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c1ef9392a4c97a2e8b497040b471e19496cdee7f/341A-thumbnail.webp',
  //   previewVideo:
  //     'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm',
  //   type: 'drops',
  // },
];

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>StagePlayer Web</title>
      <meta name="description" content="Your source for professional-quality digital backdrops" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <VStack spacing={8}>
        <Container maxW="6xl">
          <Text textAlign="left" fontSize="2xl" color="blue.500" fontWeight="bold">
            Your source for professional-quality digital backdrops
          </Text>
          <Text fontSize="sm" mt={2}>
            Prepare your mind to be blown.{' '}
            <NextLink href="/login" passHref>
              <Link color="blue.500" href="/">
                Click Here
              </Link>
            </NextLink>{' '}
            to peruse our subscription options.
          </Text>
        </Container>
        <Container maxW="6xl">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
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

          <Text fontSize="md" mt={4}>
            Popular
          </Text>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} mt={2}>
            {dropData.map((drop) => (
              <GridItem key={drop.id}>
                <video style={{ width: '100%' }} src={drop.previewVideo} controls poster={drop.image} muted playsInline />
              </GridItem>
            ))}
          </Grid>
          <Text fontSize="md" mt={4}>
            Recently Added
          </Text>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} mt={2}>
            {dropData.map((drop) => (
              <GridItem key={drop.id}>
                <video style={{ width: '100%' }} src={drop.previewVideo} controls poster={drop.image} muted playsInline />
              </GridItem>
            ))}
          </Grid>
          <Text fontSize="md" mt={4}>
            Photo Real
          </Text>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} mt={2}>
            {dropData.map((drop) => (
              <GridItem key={drop.id}>
                <video style={{ width: '100%' }} src={drop.previewVideo} controls poster={drop.image} muted playsInline />
              </GridItem>
            ))}
          </Grid>
          <Text fontSize="md" mt={4}>
            Premium Backdrops
          </Text>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} mt={2}>
            {dropData.map((drop) => (
              <GridItem key={drop.id}>
                <video style={{ width: '100%' }} src={drop.previewVideo} controls poster={drop.image} muted playsInline />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </VStack>
    </main>
    <footer />
  </Layout>
);

export default Home;
