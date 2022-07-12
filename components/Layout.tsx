import Image from 'next/image';
import type { ReactNode } from 'react';

import { Container, Flex, Text } from '@chakra-ui/react';
// @ts-ignore
import NavBar from './NavBar.tsx';
import Logo from '../lib/assets/black_logo.png';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <footer>
        <Container maxW="6xl" my={4}>
          <Flex direction="row" justifyContent="space-between" alignItems="center">
            <Image src={Logo} alt="Broadway Media" height={48} width={80} />
            <Text fontSize=".75rem">2022 &copy; Broadway Media Distribution, Inc. All rights reserved.</Text>
          </Flex>
        </Container>
      </footer>
    </div>
  );
}
