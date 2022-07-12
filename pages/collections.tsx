/* eslint-disable jsx-a11y/media-has-caption */
import { FC } from 'react';

import { Container, VStack, Box, Text, Grid, GridItem, Flex, Icon } from '@chakra-ui/react';
import { AiOutlineStar, AiOutlinePlusCircle } from 'react-icons/ai';
// @ts-ignore
import Layout from '../components/Layout.tsx';

interface CollectionsProps {
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

const Collections: FC<CollectionsProps> = () => (
  // { id, name, previewVideo }
  <Layout>
    <Container maxW="6xl" my={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" color="blue.500" fontWeight="bold">
          My Collections
        </Text>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Icon as={AiOutlineStar} w={6} h={6} />
              <Text fontSize="md">Starred</Text>
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
                Edit
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection 1</Text>
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
                Edit
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection 2</Text>
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
                Edit
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        <Text fontSize="lg">Add New...</Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center" justifyContent="center" height="200px" border="1px" borderColor="gray.400">
              <Box height="auto" width="100%" justifyContent="center" mx={0} marginY="auto" textAlign="center">
                <Icon as={AiOutlinePlusCircle} w={14} h={14} />
              </Box>
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
              <GridItem border="1px" borderColor="gray.400" height="64px" />
              <GridItem border="1px" borderColor="gray.400" height="64px" />
              <GridItem border="1px" borderColor="gray.400" height="64px" />
            </Grid>
          </GridItem>
        </Grid>

        <Text fontSize="2xl" color="blue.500" fontWeight="bold">
          Popular Collections
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection A</Text>
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
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection B</Text>
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
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection C</Text>
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

export default Collections;
