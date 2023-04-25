import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useCurrentUser } from '@/hooks';

export default function AddButton() {
  const [isSticky, setIsSticky] = useState(false);
  const user = useCurrentUser();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position={isSticky ? 'fixed' : 'static'}
      bottom="20px"
      right="20px"
      zIndex="1"
      hidden={user?.role !== 'ADMIN' ? true : false}
    >
      <Button rounded="full" colorScheme="green">
        +
      </Button>
    </Box>
  );
}
