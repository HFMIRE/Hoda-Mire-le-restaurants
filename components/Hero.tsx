import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Icon,
  Text,
  Image,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
const HeroComp = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "5", lg: "12" }}
    >
      <NextLink href="menu">
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={{ base: "0", lg: "20" }}
        >
          <Box
            width={{ lg: "sm" }}
            transform={{ base: "translateY(-50%)", lg: "none" }}
            bg={{
              base: useColorModeValue("brand.150", "white.700"),
              lg: "transparent",
            }}
            mx={{ base: "6", md: "8", lg: "0" }}
            px={{ base: "6", md: "8", lg: "0" }}
            py={{ base: "6", md: "8", lg: "12" }}
          >
            <Stack spacing={{ base: "8", lg: "10" }}>
              <Stack spacing={{ base: "2", lg: "4" }}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                  color="brand.900"
                  lineHeight={"110%"}
                >
                  Want to grab a{" "}
                  <Text as={"span"} color={"brand.200"}>
                    table
                  </Text>
                  {"  "}
                  <Text as={"span"} color={"brand.700"}>
                    and
                  </Text>
                  {"  "}
                  <Text as={"span"} color={"brand.200"}>
                    eat
                  </Text>
                  ?
                </Heading>
              </Stack>
              <VStack spacing="2">
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color={"brand.900"}
                  p={3}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia,molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum.
                </Text>
                <HStack spacing={2}>
                  <Text
                    color={useColorModeValue("brand.500", "purple.300")}
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {" "}
                    Order Now
                  </Text>

                  <Icon
                    color={useColorModeValue("brand.500", "purple.300")}
                    as={FaArrowRight}
                  />
                </HStack>
              </VStack>
            </Stack>
          </Box>
          <Flex>
            <Image
              src="http://localhost:3000/assets/11.png"
              alt="hero image"
              fallback={<Skeleton />}
              objectFit="cover"
              flex="1"
            />
          </Flex>
        </Stack>
      </NextLink>
    </Box>
  );
};

export default HeroComp;
