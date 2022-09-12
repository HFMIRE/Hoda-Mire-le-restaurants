import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
export default function BookingForm() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      minH={"80vh"}
      backgroundImage="url('http://localhost:3000/assets/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Book a reservation
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy le restaurant.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Date</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"brand.700"}
                color={"white"}
                _hover={{
                  bg: "brand.750",
                }}
              >
                Book
              </Button>
            </Stack>
            <Stack pt={6}>
              <NextLink href="/menu" passhref>
                <Text align={"center"}>
                  Already Booked? <Link color={"brand.500"}>Menu</Link>
                </Text>
              </NextLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
