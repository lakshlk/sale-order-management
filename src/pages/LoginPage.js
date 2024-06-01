import React from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/react';

const LoginPage = () => {
  const handleLogin = () => {
    // Add login logic here
    window.location.href = '/dashboard';
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Stack spacing="4">
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button onClick={handleLogin}>Login</Button>
      </Stack>
    </Box>
  );
};

export default LoginPage;
