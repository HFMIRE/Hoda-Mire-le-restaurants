import {
  HStack,
  Text,
  StackProps,
  TextProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export function formatPrice(value, opts) {
  const formatter = new Intl.NumberFormat("en-GB", {
    currency: "GBP",
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props) => {
  const { price, currency, salePrice, rootProps, priceProps, salePriceProps } =
    props;

  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice(price, { currency })}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
          {formatPrice(salePrice, { currency })}
        </SalePrice>
      )}
    </HStack>
  );
};

const Price = (props) => {
  const { isOnSale, children, textProps } = props;
  const defaultColor = mode("orange.50.700", "orange.50.400");
  const onSaleColor = mode("orange.50.400", "orange.50.700");
  const color = isOnSale ? onSaleColor : defaultColor;
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? "line-through" : "none"}
      {...textProps}
    >
      {children}
    </Text>
  );
};

const SalePrice = (props) => (
  <Text
    as="span"
    fontWeight="semibold"
    color={mode("orange.50.800", "orange.50.100")}
    {...props}
  />
);
