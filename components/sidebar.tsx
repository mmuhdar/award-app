import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ISidebar {
  isOpen: boolean;
  onClose: () => void;
  statusButton: string;
}

export default function Sidebar({ isOpen, onClose, statusButton }: ISidebar) {
  const [slideMin, setSlideMin] = useState(0);
  const [slideMax, setSlideMax] = useState(0);
  const router = useRouter();
  const { pathname } = router;

  function sliderHandler(value: any[]): void {
    setSlideMin(value[0] * 10000);
    setSlideMax(value[1] * 10000);
  }

  function convertNumber(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return statusButton == 'menu' ? (
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
  ) : (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full">
      <DrawerOverlay maxW="md" />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filter</DrawerHeader>
        <DrawerBody>
          <Flex flexDir="column" justifyContent="space-between">
            <Box>ini filter</Box>
            <Box>
              <Stack direction="column" spacing={3}>
                <Text fontSize="sm" fontWeight="semibold">
                  Poin Needed
                </Text>
                <Flex flexDir="column">
                  <Flex justifyContent="space-between">
                    <Text fontSize="md" color="blue.500">
                      IDR {convertNumber(slideMin)}
                    </Text>
                    <Text fontSize="md" color="blue.500">
                      IDR {convertNumber(slideMax)}
                    </Text>
                  </Flex>
                  <RangeSlider
                    defaultValue={[slideMin / 10000, slideMax / 10000]}
                    onChange={(e) => sliderHandler(e)}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </Flex>
              </Stack>
              <Stack direction="column" spacing={3} mt={5}>
                <Text fontSize="sm" fontWeight="semibold">
                  Awards Type
                </Text>
                <Checkbox colorScheme="blue" color="blue.500">
                  All Type
                </Checkbox>
                <Checkbox colorScheme="blue" color="blue.500">
                  Vouchers
                </Checkbox>
                <Checkbox colorScheme="blue" color="blue.500">
                  Products
                </Checkbox>
                <Checkbox colorScheme="blue" color="blue.500">
                  Others
                </Checkbox>
              </Stack>
            </Box>
            <Button
              width="100%"
              bgColor="blue.600"
              _hover={{ bg: 'blue.400' }}
              color="white"
            >
              Filter
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
