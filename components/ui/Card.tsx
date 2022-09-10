import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Card({ item }: any) {
  return (
    <Center py={12}>
      {item && (
        <NextLink href={`menu/${item._id}`} passHref>
          <LinkBox
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={"white"}
            boxShadow={"sm"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"sm"}
              mt={-12}
              pos={"relative"}
              height={"330px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${item.image})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
            >
              <Image
                rounded={"lg"}
                height={340}
                width={452}
                objectFit={"cover"}
                alt={item.name}
                src={item.image}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                p={2}
                color={"brand.850"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {item.brand}
              </Text>
              <LinkOverlay href={`item/${item._id}`}>
                <Heading
                  fontSize={"xl"}
                  fontFamily={"body"}
                  fontWeight={300}
                  color={"black.500"}
                >
                  {item.name}
                </Heading>
              </LinkOverlay>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} fontSize={"l"}>
                  £{item.price}
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </NextLink>
      )}
    </Center>
  );
}
