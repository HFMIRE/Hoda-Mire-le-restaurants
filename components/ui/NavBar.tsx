import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "./header.module.css";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import React, { useEffect, useState, ReactNode } from "react";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });
  const { isOpen, onToggle } = useDisclosure();
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
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        p={4}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={"brand.200"} />
              ) : (
                <HamburgerIcon w={5} h={5} color={"brand.200"} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          p={1}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"orange.50"}
            p={4}
          >
            <NextLink href="/">
              <Image
                src="http://localhost:3000/assets/rest.png"
                alt="Sushi Logo"
              />
            </NextLink>
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10} mt={3}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          mr={5}
          mt={-4}
        >
          <noscript>
            <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
          </noscript>
          <div className={styles.signedInStatus}>
            <p
              className={`nojs-show ${
                !session && loading ? styles.loading : styles.loaded
              }`}
            >
              {!session && (
                <>
                  <span className={styles.notSignedInText}>
                    You are not signed in
                  </span>
                  <a
                    href={`/api/auth/signin`}
                    className={styles.buttonPrimary}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    Sign in
                  </a>
                </>
              )}
              {session?.user && (
                <>
                  <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className={styles.avatar}
                  />
                  <span className={styles.signedInText}>
                    <small>Signed in as</small>
                    <br />
                    <strong>{session.user.email || session.user.name}</strong>
                  </span>
                  <a
                    href={`/api/auth/signout`}
                    className={styles.button}
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign out
                  </a>
                </>
              )}
            </p>
          </div>
          <NextLink href="/cart" passHref>
            <a>
              <HStack p={2}>
                <BsCart2 color={"turquoise"} size={20} />
                <Text color={"brand.900"} size="xs">
                  {cartItemValue}
                </Text>
              </HStack>
            </a>
          </NextLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("brand.700", "orange.200");
  const linkHoverColor = useColorModeValue("brand.200", "orange.50");
  const popoverContentBgColor = useColorModeValue("brand.700", "orange.400");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} p={5}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NextLink href={navItem.href} passHref>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"md"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </NextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={10}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child: any) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
}: {
  label: string;
  href: string;
  subLabel: string;
}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("brand.250", "orange.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "brand.20" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"brand.200"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("brand.100", "orange.200")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({
  label,
  children,
  href,
}: {
  label: string;
  href: string;
  children?: ReactNode | any;
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <NextLink href={Link} passhref>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("orange.600", "orange.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </NextLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("orange.200", "orange.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <>
                <NextLink href={child.href} passHref>
                  <Link key={child.label} py={2} href={child.href}>
                    {child.label}
                  </Link>
                </NextLink>
              </>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: { label: string; href: string; children?: ReactNode }[] = [
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Book",
    href: "#",
  },
  {
    label: "Contact us",
    href: "#",
  },
];
