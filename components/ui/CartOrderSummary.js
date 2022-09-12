import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import axios from "axios";
import NextLink from "next/link";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { removeAllFromCart } from "../../redux/cart.slice";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";

import { useRouter } from "next/router";
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
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const cart = useSelector((state) => state.cart);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
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

  const orderdata = {
    items: cartItem,
    orderTotal: getTotalPrice(),
    tableNumber: input,
    userId: session?.user.id,
  };

  function PostOrder() {
    if (input) {
      axios
        .post("http://localhost:3000/api/order", orderdata, config)
        .then((response) => {
          console.log("res", response);
        });
      dispatch(removeAllFromCart());
      router.push("/confirm");
    }
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
      <FormControl>
        <FormLabel>Table Number</FormLabel>
        <Input
          isRequired
          type="table-number"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the table so that you can order at the table
          </FormHelperText>
        ) : (
          <FormErrorMessage>Table number is required.</FormErrorMessage>
        )}
      </FormControl>
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

      {input.length >= 1 ? (
        <Button
          colorScheme="teal"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
          onClick={() => PostOrder()}
        >
          Checkout
        </Button>
      ) : (
        <Button
          colorScheme="teal"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
          onClick={() => PostOrder()}
          isDisabled
        >
          Checkout
        </Button>
      )}
    </Stack>
  );
};
