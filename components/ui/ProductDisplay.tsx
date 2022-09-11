import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import AccordionComp from "./AccordionComp";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import { ItemData } from "../../types/interface.model";

const ProductDisplay = ({ data }: ItemData) => {
  console.log("Data", data);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [size, setSize] = useState();

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
      <Flex>
        <Image rounded={"md"} alt={data.name} src={data.image} />
      </Flex>
      <Stack spacing={4}>
        <HStack>
          <NextLink href="/menu">
            <ChevronLeftIcon w={6} h={6} color="brand.700" />
          </NextLink>
          <Breadcrumb color={"brand.500"}>
            <BreadcrumbItem>
              <BreadcrumbLink color={"brand.200"}>Products</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <NextLink href="#">
                <BreadcrumbLink color={"brand.750"}>{data.name}</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
        <Heading color={"orange.500"}>{data.name}</Heading>
        <Text color={"brand.750"} fontSize={"lg"}>
          {data.description}
        </Text>
        <Text color={"brand.850"} fontSize={"lg"} fontWeight={500}>
          £ {data.price}
        </Text>
        <Button
          colorScheme="orange"
          p={3}
          onClick={() => dispatch(addToCart(data))}
        >
          Add to cart
        </Button>
        <AccordionComp allergies={data.allergies} />
      </Stack>
    </SimpleGrid>
  );
};

export default ProductDisplay;
