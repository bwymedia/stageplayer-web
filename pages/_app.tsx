import '../styles/globals.css';
import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

interface MyAppProps extends AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
