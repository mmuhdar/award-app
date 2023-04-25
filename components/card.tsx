import React from 'react';
import { Flex, Tag, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { convertNumber } from '@/utils/convertNumber';

interface ICard {
  data: {
    name: string;
    poin: number;
    type: string;
    image: string;
  };
}

export default function Card({ data }: ICard) {
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
            <Tag
              bg={
                data.type == 'GIFTCARD'
                  ? 'green.500'
                  : data.type == 'PRODUCTS'
                  ? 'orange.500'
                  : 'blue.500'
              }
              color="white"
            >
              {data.type}
            </Tag>
          </Flex>
          <Flex justifyContent="flex-start" p={3} mt={7}>
            <Text fontSize="sm">{convertNumber(data.poin)} Poin</Text>
          </Flex>
        </Flex>
        <Text fontSize="sm" fontWeight="semibold">
          {data.name}
        </Text>
      </Flex>
    </>
  );
}
