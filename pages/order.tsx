import { Box } from "@chakra-ui/react";
import OrderInfomation from "../components/OrderInfomation";
import fetcher from "../libs/fetcher";
import useSWR from "swr";
import type { NextPage } from "next";
import AlertMsg from "../components/ui/AlertMsg";
import { ItemProp } from "../types/interface.model";
const URL = "http://localhost:3000/api/order";
const Order: NextPage = () => {
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
