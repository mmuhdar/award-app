import { Flex, Tag, Text } from '@chakra-ui/react';
import React from 'react';

export default function Card() {
  return (
    <>
      <Flex flexDir="column" ml={5} mr={5} gap={2}>
        <Flex rounded="xl" bg="gray.100" flexDir="column" boxShadow="lg">
          <Flex justifyContent="flex-end" p={5}>
            <Tag bg="blue.500" color="white">
              Vouchers
            </Tag>
          </Flex>
          <Flex justifyContent="flex-start" p={5}>
            <Text fontSize="md">800.000 Poin</Text>
          </Flex>
        </Flex>
        <Text fontSize="sm" fontWeight="semibold">
          Voucher IDR 800.000
        </Text>
      </Flex>
    </>
  );
}
