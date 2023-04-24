import { Flex, Tag, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import React from 'react';

export default function Card() {
  return (
    <>
      <Flex flexDir="column" ml={5} mr={5} gap={2}>
        <Flex
          rounded="xl"
          bg="gray.100"
          flexDir="column"
          justifyContent="space-between"
          boxShadow="lg"
        >
          {/* <Image
            alt="award"
            display="flex"
            src="https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80"
          /> */}
          <Flex justifyContent="flex-end" p={3}>
            <Tag bg="blue.500" color="white">
              Vouchers
            </Tag>
          </Flex>
          <Flex justifyContent="flex-start" p={3} mt={7}>
            <Text fontSize="sm">800.000 Poin</Text>
          </Flex>
        </Flex>
        <Text fontSize="sm" fontWeight="semibold">
          Voucher IDR 800.000
        </Text>
      </Flex>
    </>
  );
}
