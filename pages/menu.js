import ProductList from "../components/ProductList";
import AlertMsg from "../components/ui/AlertMsg";
import fetcher from "../libs/fetcher";
import useSWR from "swr";

const URL = "http://localhost:3000/api/item";
const Menu = () => {
  let { data, error } = useSWR(URL, fetcher);

  if (error) {
    <AlertMsg />;
  }
  if (!data) {
    <div>Loading....</div>;
  }

  return data && <ProductList menu={data.data} />;
};
export default Menu;
