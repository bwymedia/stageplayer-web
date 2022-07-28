import { useState } from 'react';
import { Container, Text, Radio, Grid, GridItem, VStack, Flex, RadioGroup, Button, Box } from '@chakra-ui/react';
// @ts-ignore
import Layout from '../components/Layout.tsx';

const Subscriptions = () => {
  const [value, setValue] = useState('1');
  const data = [
    {
      tier: 'Basic',
      price: '$50.00',
      pricePerDuration: 'mo',
      paymentCycle: 'annually',
      priceComparison: '195',
      activeShowAmount: 1,
      userStorage: '2',
      userStorageUnit: 'GB',
      description: 'Unlimited access to our vast library of animated digital backdrops and the StagePlayer Desktop performance app.',
    },
    {
      tier: 'Standard',
      price: '$150.00',
      pricePerDuration: 'mo',
      paymentCycle: 'annually',
      priceComparison: '450',
      activeShowAmount: 1,
      userStorage: '5',
      userStorageUnit: 'GB',
      description: 'Basic features PLUS premium library of sound effects, vignette overlays, video transitions, etc.',
    },
    {
      tier: 'Advanced',
      price: '$295.00',
      pricePerDuration: 'mo',
      paymentCycle: 'annually',
      priceComparison: '850',
      activeShowAmount: 2,
      userStorage: '10',
      userStorageUnit: 'GB',
      description: 'Standard features PLUS cloud access QLab output',
    },
    {
      tier: 'Enterprise',
      price: 'Price Varies',
      paymentCycle: '',
      pricePerDuration: '',
      priceComparison: '',
      activeShowAmount: '5',
      userStorage: '50',
      userStorageUnit: 'GB',
      description: 'Advanced features PLUS multiple users, auto-sync, and more.',
    },
  ];
  return (
    <Layout>
      <Container maxW="6xl">
        <Grid templateColumns={{ base: 'repeat(1, 1fr)' }} gap={12} mt={2}>
          <GridItem colSpan={1} mt={{ base: 6, md: 8 }}>
            <Text fontSize="2xl" color="blue.500">
              StagePlayer Subscription Tiers
            </Text>

            <Grid id="subscription-modal" templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4} mt={6}>
              {data.map((item) => (
                <GridItem key={item.tier} colSpan={1} border="2px" borderColor="blue.500" borderRadius="md" style={{ borderStyle: 'dashed' }}>
                  <VStack spacing={4} textAlign="center">
                    <Text fontSize="2xl" fontWeight="bold" borderBottom="1px" width="100%" mt={0} py={2}>
                      {item.tier}
                    </Text>
                    <Text
                      fontWeight="bold"
                      borderBottom="1px"
                      width="100%"
                      py={2}
                      fontSize="xl"
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      style={{ marginTop: 0 }}
                      height={{ base: '80px' }}
                    >
                      {item.price}
                      {item.pricePerDuration && <>/{item.pricePerDuration}</>}
                      <Box fontWeight="normal" fontSize={{ base: 'xs', md: 'sm' }} mt={-1}>
                        {item.paymentCycle && <>billed {item.paymentCycle}</>}
                      </Box>
                      <Box fontWeight="normal" fontSize={{ base: 'xs', md: 'sm' }} mt={-1}>
                        {item.priceComparison && <>(${item.priceComparison} month-to-month)</>}
                      </Box>
                    </Text>
                    <Text fontSize="2xl" fontWeight="semibold" borderBottom="1px" width="100%" py={2} style={{ marginTop: 0 }}>
                      {item.activeShowAmount}&nbsp;
                      <Box fontSize={{ base: 'md', md: 'lg' }} mt={-3}>
                        active show{item.activeShowAmount > 1 ? 's' : ''}
                      </Box>
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold" borderBottom="1px" width="100%" py={3} style={{ marginTop: 0 }}>
                      {item.userStorage} GB
                      <Box fontSize={{ base: 'md', md: 'lg' }} mt={-3}>
                        storage for user content
                      </Box>
                    </Text>
                    <Text
                      fontSize="xs"
                      borderBottom="1px"
                      width="100%"
                      p={1}
                      py={2}
                      minHeight={{ base: '90px' }}
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      style={{ margin: 0, height: '100%' }}
                    >
                      {item.description}
                    </Text>
                    <RadioGroup onChange={setValue} value={value} pb={2}>
                      <Radio size="md" />
                    </RadioGroup>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
          <Flex justifyContent="center" width="100%">
            <Button colorScheme="blue" textAlign="center" borderRadius="none">
              Update Subscription
            </Button>
          </Flex>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Subscriptions;
