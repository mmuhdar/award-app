import React from 'react';
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

interface ISidebar {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: ISidebar) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay maxW="md" />
      <DrawerContent>
        <DrawerBody display="flex" justifyContent="center" alignItems="center">
          <Image alt="star" src="star.svg" width={50} height={50} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
