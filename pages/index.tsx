import Head from 'next/head';
import { Flex, Text } from '@chakra-ui/react';
import { IoFilterSharp, HiMenuAlt2 } from 'react-icons/all';

export default function Home() {
  return (
    <>
      <Head>
        <title>Award App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="space-between" alignItems="center" p={5}>
        <HiMenuAlt2 size="20px" />
        <Text fontSize="lg" fontWeight="bold">
          Awards
        </Text>
        <IoFilterSharp size="20px" />
      </Flex>
    </>
  );
}
