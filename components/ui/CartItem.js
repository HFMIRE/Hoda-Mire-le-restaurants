import { CloseButton, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { useDispatch } from "react-redux";
import { CartProductMeta } from "./CartProductMeta";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      color={"brand.700"}
    >
      <CartProductMeta
        name={item.name}
        description={item.description}
        image={item.image}
      />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        p={5}
      >
        <HStack>
          <Button
            colorScheme="red"
            onClick={() => dispatch(incrementQuantity(item._id))}
          >
            +
          </Button>
          <Text p={5} color={"brand.900"}>
            {item.quantity}
          </Text>
          <Button
            colorScheme="red"
            onClick={() => dispatch(decrementQuantity(item._id))}
          >
            -
          </Button>
          <PriceTag price={item.price} currency={"GBP"} />
          <CloseButton
            aria-label={`Delete ${item.name} from cart`}
            onClick={() => dispatch(removeFromCart(item._id))}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default CartItem;
