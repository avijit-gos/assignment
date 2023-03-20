/** @format */

import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const CartHeader = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <Box className='cart_header'>
      <Button className='back_btn' onClick={goBack}>
        <BiArrowBack />
      </Button>
      <span className='title'>Cart</span>
    </Box>
  );
};

export default CartHeader;
