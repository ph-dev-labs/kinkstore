import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import CartItems from "./CartItems";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
const CartPage = ({toggle}) => {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  // Example data, replace this with your actual data
  const cartItemData = {
    pictures: "/images/ADS-1.png",
    title: "Product Title",
    quantity: 2,
    price: "$20",
  };

  return (
    <Container>
      <IconHolder>
        <p>cart .{}</p>
        <ClearOutlinedIcon onClick={toggle} />
      </IconHolder>
      <CartItems
        pictures={cartItemData.pictures}
        title={cartItemData.title}
        quantity={cartItemData.quantity}
        price={cartItemData.price}
      />
    </Container>
  );
};

export default CartPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: auto;
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 96%;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  display: flex;
  flex: 1;
`;
