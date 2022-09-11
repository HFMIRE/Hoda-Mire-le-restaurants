import {
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export const CartProductMeta = (props) => {
  const { image, name, description } = props;
  return (
    <Stack direction="row" spacing="5" width="full" color={"orange.50"}>
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium" color={"orange.300"}>
            {name}
          </Text>
          <Text color={mode("brand.750", "white.400")} fontSize="sm">
            {description}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
