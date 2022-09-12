import React from "react";
import { Box, Flex, Heading, Link, Text, HStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
const OrderConfirmation = () => {
  const { data: session } = useSession();
  return (
    <Box
      as="section"
      minH={"80vh"}
      m={{ sm: 4, md: 16, lg: 10 }}
      p={{ sm: 5, md: 5, lg: 16 }}
      backgroundImage="url('http://localhost:3000/assets/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }}>
        <Flex direction="column" align="center" textAlign="center">
          <Heading fontSize={{ base: "xl", md: "2xl" }}>Order</Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="small" mt="6">
            {session?.user.name}, Thank for your Order, the food will arrive
            shortly
          </Text>
          <Flex direction="column" align="center" flex="1" p={5}>
            <NextLink href="/" passHref>
              <Link color={"brand.250"}>Go back to homepage</Link>
            </NextLink>
            <HStack fontWeight="semibold">
              <p>or</p>
              <NextLink href="/menu" passHref>
                <Link color={"brand.500"}>Browse the Menu</Link>
              </NextLink>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default OrderConfirmation;
