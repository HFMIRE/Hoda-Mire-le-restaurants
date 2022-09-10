import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CartItem from "./ui/CartItem";
import NextLink from "next/link";
import { CartOrderSummary } from "./ui/CartOrderSummary";
import { useSelector } from "react-redux";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const CartLayout = () => {
  const [cartItemValue, setCartitemValue] = useState();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    let val = cart.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
    setCartitemValue(val);
  }, [cart]);
  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      color={"brand.900"}
    >
      {cart.length === 0 ? (
        <>
          <HStack>
            <NextLink href="/menu">
              <ChevronLeftIcon w={6} h={6} color="brand.200" />
            </NextLink>
            <Breadcrumb>
              <BreadcrumbItem>
                <NextLink href="/menu">
                  <BreadcrumbLink>Cart</BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>
          <HStack mt="6" fontWeight="semibold">
            <Text fontSize={"md"}>Your Cart is Empty!</Text>
            <p>or</p>
            <NextLink href="/menu" passHref>
              <Link color={mode("brand.500", "orange.200")}>
                Continue shopping
              </Link>
            </NextLink>
          </HStack>
        </>
      ) : (
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart {cartItemValue} items
            </Heading>

            <Stack spacing="6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <NextLink href="/menu" passHref>
                <Link color={mode("brand.550", "orange.200")}>
                  Continue shopping
                </Link>
              </NextLink>
            </HStack>
          </Flex>
        </Stack>
      )}
    </Box>
  );
};

export default CartLayout;
