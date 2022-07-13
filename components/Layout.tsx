import Image from 'next/image';
import type { ReactNode } from 'react';
import React from 'react';

import { Container, Flex, Text } from '@chakra-ui/react';
// @ts-ignore
import NavBar from './NavBar.tsx';
import Logo from '../lib/assets/black_logo.png';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): React.ReactNode => (
  <div>
    <NavBar />
    <main>{children}</main>
    <footer>
      <Container maxW="6xl" my={{ base: 6, md: 4 }}>
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <Image src={Logo} alt="Broadway Media" height={40} width={72} />
          <Text fontSize={{ base: 'xs', md: 'sm' }} textAlign="right">
            2022 &copy; Broadway Media Distribution, Inc.
            <Text display={{ md: 'inline-flex' }}>&nbsp;All rights reserved.</Text>
          </Text>
        </Flex>
      </Container>
    </footer>
  </div>
);

export default Layout;
