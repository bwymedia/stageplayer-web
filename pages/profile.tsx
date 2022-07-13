import { useState } from 'react';
import {
  Container,
  Text,
  Radio,
  useDisclosure,
  Grid,
  GridItem,
  FormControl,
  VStack,
  Flex,
  Box,
  RadioGroup,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
// @ts-ignore
import Layout from '../components/Layout.tsx';

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <Button variant="ghost" size="xs" onClick={onOpen}>
                Manage
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xl', md: '5xl' }}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader color="blue.500">StagePlayer Subscription Tiers</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Grid id="subscription-modal" templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={4}>
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
                              display="flex"
                              justifyContent="center"
                              flexDirection="column"
                              style={{ marginTop: 0 }}
                              height={{ base: '80px' }}
                            >
                              {item.price}
                              {item.pricePerDuration && <>/{item.pricePerDuration}</>}
                              <Text fontSize="xs" fontWeight="light" width="100%" style={{ marginTop: 0 }}>
                                {item.paymentCycle && <>billed {item.paymentCycle}</>}
                              </Text>
                              <Text fontSize="xs" fontWeight="light" width="100%" style={{ marginTop: 0 }}>
                                {item.priceComparison && <>(${item.priceComparison} month-to-month)</>}
                              </Text>
                            </Text>
                            <Text fontSize="2xl" fontWeight="semibold" borderBottom="1px" width="100%" py={2} style={{ marginTop: 0 }}>
                              {item.activeShowAmount}
                              <Text fontSize="xs">active show{item.activeShowAmount > 1 ? 's' : ''}</Text>
                            </Text>
                            <Text fontSize="xl" fontWeight="semibold" borderBottom="1px" width="100%" py={3} style={{ marginTop: 0 }}>
                              {item.userStorage} GB<Text fontSize="xs">storage for user content</Text>
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
                  </ModalBody>

                  <ModalFooter>
                    <Flex justifyContent="center" width="100%">
                      <Button colorScheme="blue" textAlign="center" borderRadius="none">
                        Update Subscription
                      </Button>
                    </Flex>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
};

export default Profile;
