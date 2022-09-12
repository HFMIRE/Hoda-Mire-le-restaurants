import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
const OrderInfomation = ({ orderItem }) => {
  const { data: session } = useSession();

  return (
    <Box
      as="section"
      minH={"100vh"}
      backgroundImage="url('http://localhost:3000/assets/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }}>
        <Flex direction="column" align="center" textAlign="center">
          <Heading fontSize={{ base: "xl", md: "2xl" }}>Past Order</Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="small" mt="6">
            {session?.user.name}, Here is the past orders
          </Text>
          <br />

          <SimpleGrid p={3} columns={{ base: 1, sm: 2, lg: 3, xl: 2 }}>
            {orderItem &&
              orderItem
                ?.filter(({ userId }) => userId === session?.user.id)
                .map((item) => {
                  return item.items?.map((el, idx) => {
                    return (
                      <NextLink key={idx} href={`menu/${el._id._id}`} passHref>
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
                              backgroundImage: `url(${el._id.image})`,
                              filter: "blur(15px)",
                              zIndex: -1,
                            }}
                          >
                            <Image
                              rounded={"lg"}
                              height={340}
                              width={452}
                              objectFit={"cover"}
                              alt={el._id.name}
                              src={el._id.image}
                            />
                          </Box>
                          <Stack pt={10} align={"center"}>
                            <Text
                              p={2}
                              color={"brand.850"}
                              fontSize={"sm"}
                              textTransform={"uppercase"}
                            >
                              Table: {item.tableNumber}
                            </Text>
                            <LinkOverlay href={`item/${el._id._id}`}>
                              <Heading
                                fontSize={"xl"}
                                fontFamily={"body"}
                                fontWeight={300}
                                color={"black.500"}
                              >
                                {el._id.name}
                              </Heading>
                            </LinkOverlay>
                            <Stack direction={"row"} align={"center"}>
                              <Text fontWeight={500} fontSize={"l"}>
                                Qty: {el.qty}
                              </Text>
                            </Stack>
                          </Stack>
                        </LinkBox>
                      </NextLink>
                    );
                  });
                })}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export default OrderInfomation;
