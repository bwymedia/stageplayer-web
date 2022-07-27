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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CloseIcon, InfoOutlineIcon } from '@chakra-ui/icons';
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
        <Icon h={6} w={6} as={FiShoppingCart} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'md', md: 'lg' }}>
        <ModalOverlay />
        <ModalContent rounded="none">
          <ModalHeader mt={4}>My Cart</ModalHeader>
          <Box position="absolute" right={0}>
            <Flex justifyContent="flex-end" alignItems="center" position="relative">
              <ModalCloseButton />
            </Flex>
          </Box>

          <ModalBody>
            <form method="POST" onSubmit={onSubmit}>
              <Grid templateColumns="repeat(9, 1fr)">
                <GridItem colSpan={5}>
                  <Text fontSize="sm" fontWeight="semibold" mb={0}>
                    Subscription Tier: Basic <br />
                    <Link fontSize="sm" href="/subscriptions" color="blue.500" ml={2} mt={0}>
                      Change
                    </Link>
                  </Text>
                </GridItem>
                <GridItem colSpan={3}>
                  <Text fontSize="sm" fontWeight="semibold" textAlign="right">
                    $50.00/mo
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text mb={5} />
                  <Flex justifyContent="center" alignItems="center">
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={AiOutlinePlusCircle} />
                    </Button>
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={CloseIcon} w={2} h={2} />
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(9, 1fr)" mt={4}>
                <GridItem colSpan={5}>
                  <Text fontSize="sm" fontWeight="semibold" mb={0}>
                    Show 1
                    <span>
                      Suggested: Scenic Projects&nbsp;
                      <Icon as={InfoOutlineIcon} />
                    </span>
                  </Text>
                </GridItem>
                <GridItem colSpan={3}>
                  <Text fontSize="sm" fontWeight="semibold" textAlign="right">
                    $700.00
                    <span>$300.00</span>
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text mb={5} />
                  <Flex justifyContent="center" alignItems="center">
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={AiOutlinePlusCircle} />
                    </Button>
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={CloseIcon} w={2} h={2} />
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(9, 1fr)" mt={4}>
                <GridItem colSpan={5}>
                  <Text fontSize="sm" fontWeight="semibold" mb={0}>
                    Show 2
                    <span>
                      Suggested: Scenic Projects&nbsp;
                      <Icon as={InfoOutlineIcon} />
                    </span>
                    <span>
                      Suggested: Scenic Projects&nbsp;
                      <Icon as={InfoOutlineIcon} />
                    </span>
                  </Text>
                </GridItem>
                <GridItem colSpan={3}>
                  <Text fontSize="sm" fontWeight="semibold" textAlign="right">
                    $700.00
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text mb={5} />
                  <Flex justifyContent="center" alignItems="center">
                    <Button variant="ghost" size="xs" color="gray.500" fontSize="xs">
                      <Icon as={AiOutlinePlusCircle} />
                    </Button>
                    <Button variant="ghost" size="xs" color="gray.500">
                      <Icon as={CloseIcon} w={2} h={2} />
                    </Button>
                  </Flex>
                  <Flex justifyContent="center" alignItems="center">
                    <Button variant="ghost" color="gray.500" size="xs">
                      <Icon as={AiOutlinePlusCircle} />
                    </Button>
                    <Button variant="ghost" color="gray.500" size="xs">
                      <Icon as={CloseIcon} w={2} h={2} />
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
              <Button colorScheme="blue" mr={-3} mb={-1} type="submit">
                Checkout
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShoppingCart;
