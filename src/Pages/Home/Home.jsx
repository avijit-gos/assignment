/** @format */

import React from "react";
import Layout from "../../Layout/Layout";
import { GlobalContext } from "../../Context/Context";
import { Box, Spinner } from "@chakra-ui/react";
import axios from "axios";
import ItemComp from "../../Components/ItemComp/ItemComp";

const Home = () => {
  const [lists, setLists] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { setPageType } = GlobalContext();

  React.useLayoutEffect(() => {
    setPageType("home");
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/`)
      .then((response) => {
        console.log(response.data);
        setLists(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Box className='home_page'>
        {isLoading ? (
          <Box className='loading_section'>
            <Spinner className='spinner' />
          </Box>
        ) : (
          <React.Fragment>
            {(lists || []).length > 0 ? (
              <Box className='item_card_container'>
                {lists.map((data) => (
                  <ItemComp key={data.id} data={data} />
                ))}
              </Box>
            ) : (
              <Box className='empty_item_page'>No item found</Box>
            )}
          </React.Fragment>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
