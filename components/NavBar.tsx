import NextLink from 'next/link';
import type { ReactNode } from 'react';

import {
  Box,
  Select,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
  ButtonGroup,
  Center,
  Spacer,
  Button,
  Flex,
  Container,
  Text,
  Link,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';

type Props = {
  children?: ReactNode;
};

export default function Navbar({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="6xl">
      <Flex minWidth="max-content" alignItems="center" gap="2" py={4}>
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="transparent" />
          <MenuList py={0} zIndex={3} onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
              <Select placeholder="StagePlayer Web" borderTop="0" borderLeft="0" borderRight="0" roundedBottom="0">
                <option value="option1">About SP Web</option>
                <option value="option2">Contact Us</option>
              </Select>
            </MenuItem>
            <MenuItem p={0}>
              <Select onMouseEnter={onOpen} onMouseLeave={onClose} placeholder="My Collections" borderTop="0" borderLeft="0" borderRight="0" roundedBottom="0">
                <option value="option1">New Collection</option>
                <option value="option2">View/Edit</option>
              </Select>
            </MenuItem>
            <MenuItem onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
              <Select placeholder="My Productions" borderTop="0" borderLeft="0" borderRight="0" roundedBottom="0">
                <option value="option1">New Production</option>
                <option value="option2">Active Productions</option>
                <option value="option2">Retired Productions</option>
              </Select>
            </MenuItem>
            <MenuItem>Login/Logout</MenuItem>
            <MenuItem>Help</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Text textAlign="right">
          Looking for script-accurate show content?
          <br />
          Check out{' '}
          <NextLink href="/home" passHref>
            <Link color="blue.500">Scenic Projections</Link>
          </NextLink>
        </Text>
        <ButtonGroup gap="2" ml={6}>
          <Button colorScheme="blue">Log in</Button>
          <Button variant="transparent">
            <Icon h={6} w={6} as={FiShoppingCart} />
          </Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
}
