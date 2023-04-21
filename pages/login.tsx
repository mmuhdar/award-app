import React from 'react';
import { Flex, Text, Input, Button } from '@chakra-ui/react';
import Image from 'next/image';

export default function Login() {
  return (
    <Flex
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDir="column" justifyItems="center" alignItems="center">
        <Image alt="star" src="star.svg" width={70} height={70} />
        <Text fontSize="2xl" fontWeight="extrabold">
          AWARD
        </Text>
        <Text marginTop={2} fontSize="sm">
          Enter your email address
        </Text>
        <Text fontSize="sm">to sign in and continue</Text>
        <Input mt={5} ml={10} mr={10} size="sm" placeholder="Email Address" />
        <Button
          size="sm"
          pl={10}
          pr={10}
          mt={5}
          rounded="sm"
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.500' }}
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
}
