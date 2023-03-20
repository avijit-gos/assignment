/** @format */

import { Box, Button, Img } from "@chakra-ui/react";
import React from "react";
import { GrAdd } from "react-icons/gr";
import { GlobalContext } from "../../Context/Context";
import { AiFillDelete } from "react-icons/ai";

const ItemComp = ({ data, isDeleteable }) => {
  const { setCart, cart } = GlobalContext();

  const addToCart = (data) => {
    setCart((prev) => [...prev, data]);
  };

  const removeToCart = (data) => {
    const arr = cart;
    const index = arr.filter((item) => item.id !== data.id);
    setCart(index);
  };
  return (
    <Box className='item_card'>
      <span className='item_title'>{data.title}</span>
      <span className='item_catagory'>{data.category}</span>
      <Box className='item_description'>{data.description}</Box>
      <Img src={data.image} className='item_image' />

      {isDeleteable ? (
        <Box className='item_btn_container'>
          <Button className='item_add_btn' onClick={() => removeToCart(data)}>
            <AiFillDelete className='add_icon' />
          </Button>
        </Box>
      ) : (
        <Box className='item_btn_container'>
          <Button className='item_add_btn' onClick={() => addToCart(data)}>
            <GrAdd className='add_icon' />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ItemComp;
