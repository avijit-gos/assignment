/** @format */
import { Box, Avatar } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GlobalContext } from "../../../Context/Context";

const HomeHeader = () => {
  const { cart } = GlobalContext();
  return (
    <Box className='header_navbar_section'>
      {/* Logo */}
      <Box className='nav_logo'>Shopping app</Box>
      <Box className='nav_bar_link_section'>
        <Avatar src='' className='profile_avatar' />
        <Link to='/cart' className='cart_link'>
          <AiOutlineShoppingCart className='cart_icon_navbar' />
          {cart.length > 0 && <span className='cart_count'>{cart.length}</span>}
        </Link>
      </Box>
    </Box>
  );
};

export default HomeHeader;
