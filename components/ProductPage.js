import { Container } from "@chakra-ui/react";

import AlertMsg from "./ui/AlertMsg";
import ProductDisplay from "./ui/ProductDisplay";

export default function ProductPage({ data, error }) {
  if (error) {
    <AlertMsg />;
  }

  return (
    <Container maxW={"5xl"} py={12}>
      <ProductDisplay data={data} />
    </Container>
  );
}
