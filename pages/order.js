import { Box } from "@chakra-ui/react";
import OrderInfomation from "../components/OrderInfomation";
import fetcher from "../libs/fetcher";
import useSWR from "swr";

import AlertMsg from "../components/ui/AlertMsg";

const URL = "http://localhost:3000/api/order";
const Order = () => {
  let { data: order, error } = useSWR(URL, fetcher);

  if (error) {
    <AlertMsg />;
  }
  if (!order) {
    <div>Loading....</div>;
  }

  return <Box> {order && <OrderInfomation orderItem={order.data} />}</Box>;
};

export default Order;
