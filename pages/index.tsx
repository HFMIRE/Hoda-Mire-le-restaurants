import type { NextPage } from "next";
import Hero from "../components/Hero";
import { TablePopUp } from "../components/ui/TablePopUp";
const Home: NextPage = () => {
  return (
    <div>
      {/* <TablePopUp /> */}
      <Hero />
    </div>
  );
};

export default Home;
