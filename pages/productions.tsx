/* eslint-disable jsx-a11y/media-has-caption */
import { FC } from 'react';
import { Container, VStack, Button, Text, Grid, GridItem, Flex, Icon } from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';
// @ts-ignore
import Layout from '../components/Layout.tsx';

interface ProductionsProps {
  id: number;
  name: string;
  previewVideo: string;
}

// const dropData = [
//   {
//     id: '13',
//     name: '50s Diner (Day, Exterior)',
//     previewVideo:
//       'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm',
//   },
//   {
//     id: '64',
//     name: 'Neon Signs - Warm',
//     previewVideo:
//       'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm',
//   },
//   {
//     id: '84',
//     name: 'School Dance in the Auditorium (Evening, Interior)',
//     previewVideo:
//       'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm',
//   },
//   {
//     id: '204',
//     name: 'Fireworks in a Purple Sky (Night, Exterior)',
//     previewVideo:
//       'https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm',
//   },
// ];

const Productions: FC<ProductionsProps> = () => (
  // { id, name, previewVideo }
  <Layout>
    <Container maxW="6xl" my={4}>
      <VStack spacing={4} align="stretch">
        <Button colorScheme="blue" mt={4} w="200px">
          Add New Production
        </Button>
        <Text fontSize="2xl" color="blue.500" fontWeight="bold">
          Active Productions
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={AiOutlineDownload} w={6} h={6} />
              <Text fontSize="md">Production 1</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right">
                Expires 12/31/2021
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                View/Edit
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={AiOutlineDownload} w={6} h={6} />
              <Text fontSize="md">Production 2</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right">
                Expires 12/31/2021
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                View/Edit
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={AiOutlineDownload} w={6} h={6} />
              <Text fontSize="md">Production 3</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right">
                Expires 12/31/2021
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                View/Edit
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        <Text fontSize="2xl" color="blue.500" fontWeight="bold">
          Draft Productions
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center">
              <Text fontSize="md">Production 4</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right" textTransform="uppercase">
                Draft
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                View/Edit
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Text fontSize="md">Production 5</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right" textTransform="uppercase">
                Draft
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                View/Edit
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Text fontSize="md">Production 6</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right" textTransform="uppercase">
                Draft
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                View/Edit
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        <Text fontSize="2xl" color="blue.500" fontWeight="bold">
          Expired Productions
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={AiOutlineDownload} w={6} h={6} />
              <Text fontSize="md">Production A</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right">
                Expires 12/31/2021
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                Make a Copy
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={AiOutlineDownload} w={6} h={6} />
              <Text fontSize="md">Production B</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right">
                Expires 12/31/2021
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                Make a Copy
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={AiOutlineDownload} w={6} h={6} />
              <Text fontSize="md">Production C</Text>
            </Flex>
            <Flex justifyContent="flex-end" mt={2}>
              <Text fontSize="xs" as="i" textAlign="right">
                Expires 12/31/2021
              </Text>
            </Flex>
            <video
              style={{ width: '100%' }}
              src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1BZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1bbde9323dec784fa70cea93b47760f9957f9400/278A-preview.webm"
              controls
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBai9ZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f034bc975de651f552853a1ab8e1cc4fcd4bea0/400A-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--135e037ebeee45c66ccd61edff91ec50a7b3868f/061D-preview.webm"
                  controls
                />
              </GridItem>
              <GridItem>
                <video
                  style={{ width: '100%' }}
                  src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d354da37f2db5c7c3f6ab60c40ef67d994d2464b/341A-preview.webm"
                  controls
                />
              </GridItem>
            </Grid>
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                Make a Copy
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  </Layout>
);

export default Productions;
