import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Image,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

import NextLink from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });
  // const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [cartItemValue, setCartitemValue] = useState();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    let val = cart.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
    setCartitemValue(val);
  }, [cart]);
  console.log("user", session?.user);
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <NextLink href="/">
              <Image
                src="/assets/rest.png"
                alt="Sushi Logo"
                height="8"
                width="auto"
              />
            </NextLink>

            {isDesktop ? (
              <Flex justify="space-between" flex="1" gap={10}>
                <ButtonGroup variant="link" spacing="8">
                  {["menu", "cart", "contact"].map((item) => (
                    <NextLink href={item} passHref>
                      <Button key={item}>{item}</Button>
                    </NextLink>
                  ))}
                </ButtonGroup>
                <br />
                <HStack spacing="3" p={3} gap={5}>
                  {!session && (
                    <Button
                      onClick={() => signIn("google")}
                      colorScheme={"orange"}
                    >
                      Sign in
                    </Button>
                  )}
                  {session?.user && (
                    <>
                      <Flex alignItems={"center"}>
                        <Menu>
                          <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}
                          >
                            <Avatar
                              size={"sm"}
                              src={
                                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                              }
                            />
                          </MenuButton>
                          <MenuList>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Order</MenuItem>
                          </MenuList>
                        </Menu>
                      </Flex>
                      <NextLink href="/api/auth/signout" passHref>
                        <Button
                          colorScheme={"teal"}
                          onClick={() =>
                            signOut("google", {
                              callbackUrl: "localhost:3000/",
                            })
                          }
                        >
                          Sign out
                        </Button>
                      </NextLink>
                    </>
                  )}

                  <NextLink href="/cart" passHref>
                    <HStack>
                      <BsCart2 color={"red"} size={30} />
                      <Text color={"brand.900"} size="xs">
                        {cartItemValue}
                      </Text>
                    </HStack>
                  </NextLink>
                </HStack>
              </Flex>
            ) : (
              <>
                <IconButton
                  variant="ghost"
                  icon={<HiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default NavBar;
