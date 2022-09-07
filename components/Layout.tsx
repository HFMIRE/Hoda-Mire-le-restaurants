import { Box } from "@chakra-ui/react";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";

import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
