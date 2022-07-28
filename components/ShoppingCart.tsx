import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CloseIcon, InfoOutlineIcon, DeleteIcon } from '@chakra-ui/icons';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST_USD}`);

const ShoppingCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { sessionId } = await fetch('./api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'base subscription',
      }),
    }).then((res) => res.json());
    const stripe: any = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.error(error);
    }
  };

  // React.useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  //   if (query.get('success')) {
  //     console.log('Order placed! You will receive an email confirmation.');
  //   }

  //   if (query.get('canceled')) {
  //     console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
  //   }
  // }, []);
  return (
    <>
      <Button variant="transparent" onClick={onOpen}>
        <Text display="flex" alignItems="end">
          <Icon h={6} w={6} as={FiShoppingCart} />
          <Box fontSize="sm" fontWeight="light">
            (2)
          </Box>
        </Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'lg' }}>
        <ModalOverlay />
        <ModalContent rounded="none" px={6} pb={6}>
          <ModalHeader mt={4} color="blue.500" fontWeight="bold" fontSize="3xl">
            My Cart
          </ModalHeader>
          <Box position="absolute" right={0}>
            <Flex justifyContent="flex-end" alignItems="center" position="relative">
              <ModalCloseButton />
            </Flex>
          </Box>

          <ModalBody>
            <form method="POST" onSubmit={onSubmit}>
              <Grid templateColumns="repeat(9, 1fr)">
                <GridItem colSpan={6}>
                  <Text fontSize="sm" fontWeight="semibold" mb={0}>
                    Subscription Tier: Basic <br />
                    <Link fontSize="sm" href="/subscriptions" color="blue.500" ml={2} mt={0}>
                      Manage Subscription
                    </Link>
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontSize="sm" fontWeight="semibold" textAlign="right">
                    $50.00/mo
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text mb={5} />
                  <Flex justifyContent="center" alignItems="center">
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={AiOutlinePlusCircle} w={4} h={4} />
                    </Button>
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={CloseIcon} w={2.5} h={2.5} />
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(9, 1fr)" mt={4}>
                <GridItem colSpan={6}>
                  <Text fontSize="sm" fontWeight="semibold" mb={0}>
                    <Box alignItems="center" display="flex">
                      Show 1 <Icon as={DeleteIcon} h={3} w={3} ml={2} color="gray.500" />
                    </Box>
                    <Box alignItems="center" display="flex" color="gray.500" fontWeight="normal" ml={4} fontStyle="italic">
                      Suggested: Scenic Projects&nbsp;
                      <Icon as={InfoOutlineIcon} />
                    </Box>
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontSize="sm" fontWeight="semibold" textAlign="right">
                    $700.00
                    <Box display="block" color="gray.500" fontWeight="normal" ml={4} fontStyle="italic">
                      $300.00
                    </Box>
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text mb={5} />
                  <Flex justifyContent="center" alignItems="center">
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={AiOutlinePlusCircle} w={4} h={4} />
                    </Button>
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={CloseIcon} w={2.5} h={2.5} />
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(9, 1fr)" mt={4}>
                <GridItem colSpan={6}>
                  <Text fontSize="sm" fontWeight="semibold" mb={0}>
                    Show 2 <Icon as={DeleteIcon} h={3} w={3} ml={2} color="gray.500" />
                    <Box alignItems="center" display="flex" color="gray.500" fontWeight="normal" ml={4} fontStyle="italic">
                      Suggested: Choreography Guides&nbsp;
                      <Icon as={InfoOutlineIcon} />
                    </Box>
                    <Box alignItems="center" display="flex" color="gray.500" fontWeight="normal" ml={4} fontStyle="italic">
                      Suggested: Accompaniment&nbsp;
                      <Icon as={InfoOutlineIcon} />
                    </Box>
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontSize="sm" fontWeight="semibold" textAlign="right">
                    $700.00
                    <Box display="block" color="gray.500" fontWeight="normal" ml={4} fontStyle="italic">
                      $300.00
                    </Box>
                    <Box display="block" color="gray.500" fontWeight="normal" ml={4} fontStyle="italic">
                      $300.00
                    </Box>
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text mb={5} />
                  <Flex justifyContent="center" alignItems="center">
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={AiOutlinePlusCircle} w={4} h={4} />
                    </Button>
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={CloseIcon} w={2.5} h={2.5} />
                    </Button>
                  </Flex>
                  <Flex justifyContent="center" alignItems="center">
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={AiOutlinePlusCircle} w={4} h={4} />
                    </Button>
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={CloseIcon} w={2.5} h={2.5} />
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex justifyContent="end" alignItems="center" mt={4}>
                <Button colorScheme="blue" fontSize="sm" px={8} borderRadius="none" mr={-4} mb={-1} type="submit">
                  Checkout
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShoppingCart;
