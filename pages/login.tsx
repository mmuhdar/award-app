import React, { FormEventHandler, useState } from 'react';
import { Flex, Text, Input, Button, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import { useLogin } from '@/hooks';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

export default function Login() {
  const { login } = useLogin();
  const router = useRouter();
  const toast = useToast();
  const [userInfo, setUserInfo] = useState({ email: '' });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!userInfo.email) {
      toast({
        title: 'Please Input all field',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
    } else {
      login(userInfo.email)
        .then((res) => {
          if (!res.data) {
            throw res;
          } else {
            toast({
              title: `Welcome back ${res.data.name}!`,
              status: 'success',
              position: 'top-right',
              isClosable: true,
            });
            router.push('/');
          }
        })
        .catch((err) =>
          toast({
            title: err.message,
            status: 'error',
            position: 'top-right',
            isClosable: true,
          })
        );
    }
  };
  return (
    <chakra.form
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      flexDir="column"
    >
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
          <Input
            mt={5}
            ml={10}
            mr={10}
            size="sm"
            placeholder="Email Address"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            value={userInfo.email}
            type="email"
          />
          <Button
            size="sm"
            pl={10}
            pr={10}
            mt={5}
            rounded="sm"
            bg="gray.700"
            color="white"
            _hover={{ bg: 'gray.500' }}
            type="submit"
          >
            Sign In
          </Button>
        </Flex>
      </Flex>
    </chakra.form>
  );
}
