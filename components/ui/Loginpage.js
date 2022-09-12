import { Box, Container, Heading, Button, Stack, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
export default function LoginPage() {
  return (
    <Box
      p={6}
      minH={"50vh"}
      backgroundImage="url('http://localhost:3000/assets/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      mt={50}
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>You are not signed in</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Please sign in to order
        </Text>
        <Button colorScheme={"teal"} onClick={() => signIn()}>
          Sign in
        </Button>
      </Stack>
    </Box>
  );
}
