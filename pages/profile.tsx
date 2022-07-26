import { Container, Text, Grid, GridItem, Link, FormControl, VStack, Flex, Box, Input, Button } from '@chakra-ui/react';
// @ts-ignore
import Layout from '../components/Layout.tsx';

const Profile = () => (
  <Layout>
    <Container maxW="6xl">
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={12} mt={2}>
        <GridItem colSpan={1}>
          <Text fontSize="2xl" fontWeight="semibold" mb={0} color="blue.500">
            Personal Information
          </Text>
          <Text color="blue.500" fontSize="sm">
            Edit
          </Text>
          <VStack spacing={4} mt={6}>
            <FormControl>
              <Input id="name" type="name" placeholder="Name" _placeholder={{ fontStyle: 'italic', fontSize: '.75rem' }} />
            </FormControl>
            <FormControl>
              <Input id="organization" type="organization" placeholder="Organization" _placeholder={{ fontStyle: 'italic', fontSize: '.75rem' }} />
            </FormControl>
            <FormControl>
              <Input id="email" type="email" placeholder="Email" _placeholder={{ fontStyle: 'italic', fontSize: '.85rem' }} />
            </FormControl>
          </VStack>
        </GridItem>
        <GridItem colSpan={1} mt={{ base: 6, md: 8 }}>
          <Text fontSize="2xl" fontWeight="semibold" mb={0} color="blue.500">
            Subscription Tier
          </Text>
          <Text style={{ color: 'blue.500' }} fontSize="sm">
            <Link href="/subscriptions">
              <Button variant="ghost" size="xs">
                Manage
              </Button>
            </Link>
          </Text>
          <Flex justifyContent="space-between" mt={6}>
            <Text fontSize="lg" fontWeight="semibold">
              Basic
            </Text>
            <Box>
              <Text fontSize="lg" fontStyle="italic" textAlign="right">
                $50.00/mo
              </Text>
              <Text fontSize="xs" fontStyle="italic">
                Next payment due 10/15/2022
              </Text>
            </Box>
          </Flex>
          <Text fontSize="2xl" fontWeight="semibold" mb={0} color="blue.500" mt={6}>
            Payment Information
          </Text>
          <Text color="blue.500" fontSize="sm">
            Change
          </Text>
          <Text fontSize="lg" ml={4} mt={1}>
            Visa (3803)
          </Text>
        </GridItem>
      </Grid>
    </Container>
  </Layout>
);

export default Profile;
