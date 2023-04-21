import * as React from 'react';
import { Container, VStack } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <VStack bg="whitesmoke">
      <Container
        bg="white"
        maxW="md"
        height="100vh"
        rounded="xl"
        boxShadow="lg"
        margin={5}
      >
        <main>{children}</main>
      </Container>
    </VStack>
  );
}
