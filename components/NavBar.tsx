import NextLink from 'next/link';
import React, { ReactNode } from 'react';
import {
  Select,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
  ButtonGroup,
  Spacer,
  Button,
  Flex,
  Container,
  Text,
  Link,
  useDisclosure,
  Show,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
// @ts-ignore
import ShoppingCart from './ShoppingCart.tsx';

interface Props {
  children: ReactNode;
}

const Navbar = ({ children }: Props): React.ReactNode => {
  const { onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="6xl">
      {children}
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
        <Show breakpoint="(min-width: 768px)">
          <Text textAlign="right">
            Looking for script-accurate show content?
            <br />
            Check out{' '}
            <NextLink href="/" passHref>
              <Link color="blue.500" href="/">
                Scenic Projections
              </Link>
            </NextLink>
          </Text>
        </Show>
        <ButtonGroup gap="2" ml={6}>
          <Button colorScheme="blue">Log in</Button>
          <ShoppingCart />
        </ButtonGroup>
      </Flex>
    </Container>
  );
};

export default Navbar;
