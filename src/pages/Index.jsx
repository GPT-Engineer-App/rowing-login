import React from "react";
import { Box, Button, Flex, Image, Input, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaGoogle, FaApple, FaUserAlt, FaLock } from "react-icons/fa";

const Index = () => {
  const rowingImageSize = useBreakpointValue({ base: "100%", md: "50%" });

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction={{ base: "column", md: "row" }} boxShadow="xl" borderRadius="lg" overflow="hidden">
        <Box flex={{ base: "none", md: 1 }} position="relative">
          <Image
            src="https://images.unsplash.com/photo-1491911923017-19f90d8d7f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb3dpbmd8ZW58MHx8fHwxNzA5NjMzMzg4fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Rowing"
            objectFit="cover"
            width="100%"
            height="100%"
            transform="scale(1.1)"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1)",
            }}
          />
        </Box>

        <Stack flex={1} spacing={4} p={8} align="center" justify="center">
          <Text fontSize="xl" fontWeight="bold">
            Welcome to Rowing Club
          </Text>

          <Stack spacing={3} width="100%">
            <Flex alignItems="center">
              <FaUserAlt />
              <Input placeholder="Username" marginLeft={2} />
            </Flex>
            <Flex alignItems="center">
              <FaLock />
              <Input placeholder="Password" type="password" marginLeft={2} />
            </Flex>
          </Stack>

          <Button colorScheme="blue" width="100%">
            Login
          </Button>

          <Text>or</Text>

          <Button leftIcon={<FaGoogle />} colorScheme="red" width="100%" marginBottom={2}>
            Sign up with Google
          </Button>

          <Button leftIcon={<FaApple />} colorScheme="gray" width="100%">
            Sign up with Apple
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Index;
