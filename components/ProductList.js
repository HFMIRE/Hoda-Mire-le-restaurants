import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "./ui/Card";

const ProductList = ({ menu }) => {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
        mx={25}
        spacing={5}
        mt={10}
        p={5}
      >
        {menu &&
          menu?.map((item, idx) => {
            return <Card item={item} key={idx} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
