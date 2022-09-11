import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

import { CartProductMeta } from "./ui/CartProductMeta";

const OrderInfomation = ({ orderItem }) => {
  console.log("Order", orderItem);
  return (
    <Box as="section" bg={useColorModeValue("gray.50", "gray.800")}>
      <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }} pt="12" pb="16">
        <Flex direction="column" align="center" textAlign="center">
          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            Order conformation
          </Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="small" mt="6">
            {orderItem.name}
            Thank for your Order, Food will arrive shortly
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" mt="6">
            &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.&rdquo;
          </Text>
          {orderItem &&
            orderItem?.map((item) => {
              console.log("itemmmmm", item.items);
              return item.items?.map((el, idx) => {
                console.log("item", el);
                return (
                  <CartProductMeta
                    key={idx}
                    name={el._id.name}
                    description={""}
                    image={el._id.image}
                  />
                );
              });
            })}
        </Flex>
      </Box>
    </Box>
  );
};

export default OrderInfomation;
