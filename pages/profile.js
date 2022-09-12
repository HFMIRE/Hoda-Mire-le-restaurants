import React from "react";
import { useSession } from "next-auth/react";

import {
  Heading,
  Image,
  Text,
  Stack,
  Skeleton,
  Container,
} from "@chakra-ui/react";

const Profile = () => {
  const { data: session, status } = useSession();
  return (
    <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
      <Heading color={"brand.600"} fontSize={"3xl"}>
        {Profile}
      </Heading>
      <Image
        src={session?.user.image}
        alt="profile image"
        fallback={<Skeleton />}
        objectFit="cover"
        flex="1"
      />
      <Text color={"gray.600"} fontSize={"xl"}>
        {session?.user.name}
      </Text>
      <Text color={"gray.600"} fontSize={"xl"}>
        {session?.user.email}
      </Text>
    </Stack>
  );
};

export default Profile;
