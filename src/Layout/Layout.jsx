/** @format */

import React from "react";
import { Box } from "@chakra-ui/react";
import HomeHeader from "../Components/Header/HomeHeader/HomeHeader";
import { GlobalContext } from "../Context/Context";
import axios from "axios";
import CartHeader from "../Components/Header/CartHeader/CartHeader";

const Header = ({ type }) => {
  if (type === "home") {
    return <HomeHeader />;
  } else {
    return <CartHeader />;
  }
};

const Layout = ({ children }) => {
  const { pageType } = GlobalContext();
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Box className='app_layout'>
      {/* Header */}
      <Box className='header_section'>
        <Header type={pageType} />
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
