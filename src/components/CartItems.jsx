import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const CartItems = ({ pictures, title, quantity, price }) => {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  return (
    <Container>
      <ImgContainer breakPoint={breakPoint}>
        <Image src={pictures} alt="product" />
      </ImgContainer>
      <Details>
        <Info>
          <Title>{title}</Title>
          <Quantity>
            {quantity}
          </Quantity>
        </Info>
      </Details>
      <Details>
        <Info>
          <DeleteIcon />
          <Price>{price}</Price>
        </Info>
      </Details>
    </Container>
  );
};

export default CartItems;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin: 1rem;
  width: 100%;
`;

const ImgContainer = styled.div`
  height: 100px;
  max-height: 100px;
  max-width: 150px;
  width: 100px;
  padding: 0.5rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  border-style: none;
  vertical-align: top;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between !important;
  align-self: flex-start;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly !important;
`;

const Title = styled.p`
  /* Title styles */
`;

const Quantity = styled.p`
  /* Quantity styles */
`;

const Price = styled.p`
  /* Price styles */
  margin-right: 0.2rem;
`;

const DeleteIcon = styled(DeleteOutlinedIcon)`
  cursor: pointer;
  margin-top: 0.8rem;
  /* Delete icon styles */
`;
