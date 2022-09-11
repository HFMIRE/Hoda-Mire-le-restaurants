import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import axios from "axios";
import NextLink from "next/link";
import { useDispatch } from "react-redux";

import { removeAllFromCart } from "../../redux/cart.slice";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("brand.750", "orange.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  let cartItem = cart.map(({ _id, quantity }) => {
    return {
      _id: _id,
      qty: quantity,
    };
  });

  let config = {
    headers: {
      method: "POST",
    },
  };

  // const getTableNumber = () => {
  //   const tableNumber = JSON.parse(localStorage.getItem("tableNumber") || "");

  //   if (!tableNumber) return undefined;
  //   return tableNumber.tableNumber;
  // };
  // console.log(getTableNumber());
  const orderdata = {
    items: cartItem,
    orderTotal: getTotalPrice(),
    tableNumber: "getTableNumber()",
    userId: "Hoda",
  };

  function PostOrder() {
    axios
      .post("http://localhost:3000/api/order", orderdata, config)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <Stack
      spacing="8"
      borderWidth="1px"
      rounded="lg"
      padding="8"
      width="full"
      color={"brand.500"}
    >
      <Heading color={"brand.900"} size="md">
        Order Summary
      </Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={`£${getTotalPrice()}`} />
        <OrderSummaryItem label="Delivery Fee">
          <NextLink href="#">Free</NextLink>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <NextLink href="#">Add coupon code</NextLink>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold" color={"brand.900"}>
            £{`${getTotalPrice()}`}
          </Text>
        </Flex>
      </Stack>
      <NextLink href={"/order"}>
        <Button
          colorScheme="teal"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
          onClick={() => dispatch(removeAllFromCart()) && PostOrder}
        >
          Checkout
        </Button>
      </NextLink>
    </Stack>
  );
};
