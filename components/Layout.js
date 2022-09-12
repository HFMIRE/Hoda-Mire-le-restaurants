import { Box } from "@chakra-ui/react";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
