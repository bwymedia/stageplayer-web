/* eslint-disable jsx-a11y/media-has-caption */
import { FC } from 'react';
import Image from 'next/image';
import { Container, VStack, Button, Text, Grid, GridItem, Flex, Box } from '@chakra-ui/react';
// @ts-ignore
import Layout from '../components/Layout.tsx';
// @ts-ignore
import CollectionGrid from '../components/CollectionGrid.tsx';

interface ProductionsProps {
  id: number;
  name: string;
  previewVideo: string;
}

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
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection A</Text>
            </Flex>

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
                priority="true"
              />
            </Box>
            <CollectionGrid />

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
            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
                priority="true"
              />
            </Box>
            <CollectionGrid />
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

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
                priority="true"
              />
            </Box>
            <CollectionGrid />
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                Make a Copy
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection D</Text>
            </Flex>

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
                priority="true"
              />
            </Box>
            <CollectionGrid />
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                Make a Copy
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        <Text fontSize="2xl" color="blue.500" fontWeight="bold">
          Draft Productions
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection A</Text>
            </Flex>

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
              />
            </Box>
            <CollectionGrid />
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
            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
              />
            </Box>
            <CollectionGrid />
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

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
              />
            </Box>
            <CollectionGrid />
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                Make a Copy
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection D</Text>
            </Flex>

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
              />
            </Box>
            <CollectionGrid />
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                Make a Copy
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        <Text fontSize="2xl" color="blue.500" fontWeight="bold">
          Expired Productions
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection A</Text>
            </Flex>

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
              />
            </Box>
            <CollectionGrid />
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
            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
              />
            </Box>
            <CollectionGrid />
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

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
              />
            </Box>
            <CollectionGrid />
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" mt={1} color="blue.500">
                Make a Copy
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center" mb={2}>
              <Text fontSize="md">Collection D</Text>
            </Flex>

            <Box height="195px" width="100%" position="relative">
              <Image
                layout="fill"
                src="https://accounts.broadwaymedia.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1RZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d3e9bb8d6f4134f057158bf5a898c6b1e1fba77/278A-thumbnail.webp"
                alt="50s Diner"
                objectFit="cover"
              />
            </Box>
            <CollectionGrid />
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
