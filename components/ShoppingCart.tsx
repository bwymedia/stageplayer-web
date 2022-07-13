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

const ShoppingCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Grid templateColumns="repeat(9, 1fr)">
              <GridItem colSpan={5}>
                <Text fontSize="sm" fontWeight="semibold" mb={0}>
                  Subscription Tier: Basic <br />
                  <Link fontSize="sm" href="/" color="blue.500" ml={2} mt={0}>
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
                  <Text color="gray.400" ml={2} fontSize="xs">
                    Suggested: Scenic Projects&nbsp;
                    <Icon as={InfoOutlineIcon} />
                  </Text>
                </Text>
              </GridItem>
              <GridItem colSpan={3}>
                <Text fontSize="sm" fontWeight="semibold" textAlign="right">
                  $700.00
                  <Text color="gray.400" ml={2}>
                    $300.00
                  </Text>
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
                  <Text color="gray.400" ml={2} mb={2} fontSize="xs">
                    Suggested: Scenic Projects&nbsp;
                    <Icon as={InfoOutlineIcon} />
                  </Text>
                  <Text color="gray.400" ml={2} fontSize="xs">
                    Suggested: Scenic Projects&nbsp;
                    <Icon as={InfoOutlineIcon} />
                  </Text>
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={-3} mb={-1} onClick={onClose}>
              Checkout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShoppingCart;
