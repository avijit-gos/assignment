/** @format */

import React from "react";
import Layout from "../../Layout/Layout";
import { GlobalContext } from "../../Context/Context";
import { Box } from "@chakra-ui/react";
import ItemComp from "../../Components/ItemComp/ItemComp";

const Cart = () => {
  const { cart, setPageType } = GlobalContext();

  React.useLayoutEffect(() => {
    setPageType("cart");
  }, []);
  return (
    <Layout title='Cart'>
      <Box className='cart_section'>
        {(cart || []).length > 0 ? (
          <Box className='item_card_container'>
            {cart.map((data, index) => (
              <ItemComp key={index} data={data} isDeleteable={true} />
            ))}
          </Box>
        ) : (
          <Box className='empty_cart'>No cart item found</Box>
        )}
      </Box>
    </Layout>
  );
};

export default Cart;
