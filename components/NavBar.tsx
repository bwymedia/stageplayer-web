import NextLink from 'next/link';
import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Icon,
  ButtonGroup,
  Button,
  Flex,
  Container,
  Text,
  Link,
  useDisclosure,
  Show,
} from '@chakra-ui/react';
import { RiAccountCircleLine } from 'react-icons/ri';
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import { TbFilter } from 'react-icons/tb';
import StagePlayerLogo from '../lib/assets/stage_player.svg';
// @ts-ignore
import ShoppingCart from './ShoppingCart.tsx';

interface Props {
  children: ReactNode;
}

const Navbar = ({ children }: Props): React.ReactNode => {
  const { onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container maxW="6xl">
      {children}
      <Flex width="100%" alignItems="center" justifyContent={{ base: 'space-between' }} gap="2" py={4} maxW="100%">
        <Flex alignItems="center">
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="transparent" />
            <MenuList py={0} zIndex={3} onMouseEnter={onOpen} onMouseLeave={onClose}>
              <MenuGroup title="StagePlayer Web">
                <MenuItem>
                  <Link href="https://www.broadwaymedia.com/about/broadway-media" target="blank">
                    About SP Web
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="https://www.broadwaymedia.com/about/contact-us" target="_blank">
                    Contact Us
                  </Link>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="My Collections">
                <MenuItem>
                  <Link href="/collections">New Collections</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/editor">View/Edit</Link>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="My Productions">
                <MenuItem>
                  <Link href="/productions">New Production</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/productions">Active Productions</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/productions">Retired Productions</Link>
                </MenuItem>
              </MenuGroup>
              <MenuItem>
                <Link href="/login">Login/Logout</Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://www.broadwaymedia.com/learn/help-center" target="_blank">
                  Help
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          {!isLoggedIn && (
            <Link href="/">
              <Image src={StagePlayerLogo} height={40} width={75} alt="Broadway Media" />
            </Link>
          )}
        </Flex>
        {isLoggedIn ? (
          <ButtonGroup gap="1" alignSelf="end" width={{ md: '100%' }}>
            <>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.300" />
                </InputLeftElement>
                <Input type="tel" placeholder="Search our collection" />
                <Show breakpoint="(min-width: 768px)">
                  <HStack>
                    <Icon as={TbFilter} h={8} w={8} />
                    <Button colorScheme="blue" size="sm">
                      Search
                    </Button>
                  </HStack>
                </Show>
              </InputGroup>
              <Link href="/profile">
                <Button variant="transparent" size="sm" alignSelf="center">
                  <Icon as={RiAccountCircleLine} h={8} w={8} />
                </Button>
              </Link>
            </>
          </ButtonGroup>
        ) : (
          ''
        )}
        <Flex alignItems="center">
          {!isLoggedIn && (
            <Show breakpoint="(min-width: 768px)">
              <Text textAlign="right" fontSize="sm" mr={4}>
                Looking for script-accurate show content?
                <br />
                Check out{' '}
                <Link color="blue.500" href="https://catalog.broadwaymedia.com/shows" target="_blank">
                  Scenic Projections
                </Link>
              </Text>
            </Show>
          )}

          <Button colorScheme="blue" size="sm" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Log in'}
          </Button>
          <ShoppingCart />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
