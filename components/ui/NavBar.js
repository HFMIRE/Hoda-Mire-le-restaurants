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
  MenuList,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { saveState } from "../../redux/browser-storage";

import NextLink from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });
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
    <Box as="section" pb={{ base: "12", md: "15" }}>
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
                  {["menu", "book", "contact"].map((item, idx) => (
                    <>
                      <NextLink href={item} key={idx} passHref>
                        <Button key={idx}>{item}</Button>
                      </NextLink>
                    </>
                  ))}
                </ButtonGroup>
                <br />
                <HStack spacing="3" p={3} gap={5}>
                  {!session && (
                    <Button
                      onClick={() => signIn() && saveState()}
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
                            <Avatar size={"sm"} src={session?.user.image} />
                          </MenuButton>
                          <MenuList>
                            <NextLink href="/profile" passHref>
                              <MenuItem>Profile</MenuItem>
                            </NextLink>
                            <NextLink href="/order" passHref>
                              <MenuItem>Order</MenuItem>
                            </NextLink>
                          </MenuList>
                        </Menu>
                      </Flex>
                      {/* <NextLink href="/api/auth/signout" passHref> */}
                      <Button colorScheme={"teal"} onClick={() => signOut()}>
                        Sign out
                      </Button>
                      {/* </NextLink> */}
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
