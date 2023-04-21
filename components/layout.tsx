import * as React from 'react';
import { Container, VStack } from '@chakra-ui/react';

export default function Layout({ children }: any) {
  return (
    <VStack bg="whitesmoke">
      <Container
        bg="white"
        maxW="md"
        height="100vh"
        rounded="xl"
        boxShadow="lg"
      >
        <main>{children}</main>
      </Container>
    </VStack>
  );
}
