import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ISidebar {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: ISidebar) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay maxW="md" />
      <DrawerContent>
        <DrawerBody display="flex" justifyContent="center" mt={20}>
          <Flex flexDir="column">
            <Image alt="star" src="star.svg" width={50} height={50} />
            <Text mt={5} fontSize="lg" fontWeight="bold">
              Awards Menu
            </Text>
            <Flex mt={8} gap={3} flexDir="column">
              <Text
                cursor="pointer"
                _hover={{ color: 'black' }}
                fontWeight="semibold"
                fontSize="sm"
                color={pathname == '/' ? 'black' : 'gray.400'}
              >
                Home
              </Text>
              <Text
                cursor="pointer"
                _hover={{ color: 'black' }}
                fontWeight="semibold"
                fontSize="sm"
                color={pathname == '/cards' ? 'black' : 'gray.400'}
              >
                Cards
              </Text>
              <Text
                cursor="pointer"
                _hover={{ color: 'black' }}
                fontWeight="semibold"
                fontSize="sm"
                color={pathname == '/profile' ? 'black' : 'gray.400'}
              >
                Profile
              </Text>
              <Text
                cursor="pointer"
                _hover={{ color: 'black' }}
                fontWeight="semibold"
                fontSize="sm"
                color="gray.400"
              >
                Logout
              </Text>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
