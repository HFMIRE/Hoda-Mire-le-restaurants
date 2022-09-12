import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import ProductPage from "../../components/ProductPage";
import fetcher from "../../libs/fetcher";
import useSWR from "swr";
export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const URL = `/api/item/${id}`;

  const { data: menu, error } = useSWR(URL, fetcher);
  const { data } = menu || [];

  return (
    <Box>
      <Box p={5} mb={5}>
        {data && <ProductPage data={data} error={error} />}
      </Box>
    </Box>
  );
}
