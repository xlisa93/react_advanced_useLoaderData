import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

export const Navigation = () => {
  return (
    <Flex flexDir={['column', 'row']} alignItems={'center'} justifyContent={'space-evenly'} m={4}>
      <Button colorScheme='teal' variant='ghost' fontSize={'3xl'} p={8} gap={4}>
        <Link to="/">Homepage</Link>
      </Button>
      <Button colorScheme='teal' variant='ghost' fontSize={'3xl'} p={8} gap={4}>
        <Link to="/">About us</Link>
      </Button>
      <Button colorScheme='teal' variant='ghost' fontSize={'3xl'} p={8} gap={4}>
        <Link to="/">Jobs</Link>
      </Button>
    </Flex>
  );
};
