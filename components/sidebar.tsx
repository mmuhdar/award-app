import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLogout } from '@/hooks';

interface ISidebar {
  isOpen: boolean;
  onClose: () => void;
  statusButton: string;
}

export default function Sidebar({ isOpen, onClose, statusButton }: ISidebar) {
  const [slideMin, setSlideMin] = useState(0);
  const [slideMax, setSlideMax] = useState(0);
  const [checkedType, setCheckedType] = useState([false, false, false]);

  const router = useRouter();
  const { pathname } = router;
  const { logout } = useLogout();

  const allChecked = checkedType.every(Boolean);
  const isIndeterminate = checkedType.some(Boolean) && !allChecked;

  function sliderHandler(value: any[]): void {
    setSlideMin(value[0] * 10000);
    setSlideMax(value[1] * 10000);
  }

  function convertNumber(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function stringType(value: boolean[]): string[] {
    const [voucher, product, giftcard] = value;
    const temp = ['', '', ''];
    if (voucher) {
      temp[0] = 'VOUCHERS';
    } else {
      temp[0] = '';
    }

    if (product) {
      temp[1] = 'PRODUCTS';
    } else {
      temp[1] = '';
    }

    if (giftcard) {
      temp[2] = 'GIFTCARD';
    } else {
      temp[2] = '';
    }

    return temp;
  }
  function resetFilter(): void {
    setSlideMin(0);
    setSlideMax(0);
    setCheckedType([false, false, false]);
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
                onClick={() => {
                  logout();
                  router.push('/login');
                }}
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
          <Flex flexDir="column" justifyContent="space-between" h="85vh">
            <Flex flexDir="column" gap={2}>
              <Box>
                <Tag
                  bg="inherit"
                  color="blue.500"
                  border="1px"
                  borderColor="blue.500"
                >
                  <TagLabel>
                    Poin: {slideMin} - {slideMax}
                  </TagLabel>
                  <TagCloseButton
                    onClick={() => {
                      setSlideMax(0);
                      setSlideMin(0);
                    }}
                  />
                </Tag>
              </Box>
              <Box>
                <Tag
                  bg="inherit"
                  color="blue.500"
                  border="1px"
                  borderColor="blue.500"
                >
                  <TagLabel>
                    Type: {stringType(checkedType).toString()}
                  </TagLabel>
                  <TagCloseButton
                    onClick={() => setCheckedType([false, false, false])}
                  />
                </Tag>
              </Box>
              <Box>
                <Tag
                  bg="inherit"
                  color="blue.500"
                  border="1px"
                  borderColor="blue.500"
                  cursor="pointer"
                  onClick={() => resetFilter()}
                >
                  <TagLabel>Clear All Filter</TagLabel>
                </Tag>
              </Box>
            </Flex>
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
                <Checkbox
                  colorScheme="blue"
                  color="blue.500"
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) => {
                    setCheckedType([
                      e.target.checked,
                      e.target.checked,
                      e.target.checked,
                    ]);
                  }}
                >
                  All Type
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    setCheckedType([
                      e.target.checked,
                      checkedType[1],
                      checkedType[2],
                    ]);
                  }}
                  colorScheme="blue"
                  color="blue.500"
                  isChecked={checkedType[0]}
                >
                  Vouchers
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    setCheckedType([
                      checkedType[0],
                      e.target.checked,
                      checkedType[2],
                    ]);
                  }}
                  colorScheme="blue"
                  color="blue.500"
                  isChecked={checkedType[1]}
                >
                  Products
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    setCheckedType([
                      checkedType[0],
                      checkedType[1],
                      e.target.checked,
                    ]);
                  }}
                  colorScheme="blue"
                  color="blue.500"
                  isChecked={checkedType[2]}
                >
                  Giftcard
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
