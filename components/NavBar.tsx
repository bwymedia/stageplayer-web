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
              {/* <MenuItem onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
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
            </MenuItem> */}
              <MenuGroup title="StagePlayer Web">
                <MenuItem>
                  <NextLink href="/">
                    <Text ml={4}>About SP Web</Text>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/">
                    <Text ml={4}>Contact Us</Text>
                  </NextLink>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="My Collections">
                <MenuItem>
                  <NextLink href="/collections">
                    <Text ml={4}>New Collections</Text>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/editor">
                    <Text ml={4}>View/Edit</Text>
                  </NextLink>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="My Productions">
                <MenuItem>
                  <NextLink href="/productions">
                    <Text ml={4}>New Production</Text>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/productions">
                    <Text ml={4}>Active Productions</Text>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/productions">
                    <Text ml={4}>Retired Productions</Text>
                  </NextLink>
                </MenuItem>
              </MenuGroup>
              <MenuItem>
                <NextLink href="/login">Login/Logout</NextLink>
              </MenuItem>
              <MenuItem>
                <NextLink href="/">Help</NextLink>
              </MenuItem>
            </MenuList>
          </Menu>
          <NextLink href="/">
            <Image src={StagePlayerLogo} height={40} width={75} alt="Broadway Media" />
          </NextLink>
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
              <NextLink href="/profile">
                <Button variant="transparent" size="sm" alignSelf="center">
                  <Icon as={RiAccountCircleLine} h={8} w={8} />
                </Button>
              </NextLink>
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
                <NextLink href="https://catalog.broadwaymedia.com/shows" passHref>
                  <Link color="blue.500" href="/https://catalog.broadwaymedia.com/shows" target="_blank">
                    Scenic Projections
                  </Link>
                </NextLink>
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
