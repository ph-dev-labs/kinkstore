import React from "react";
import styled from "styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function Aside() {
  return (
    <Container>
      <Gift>Give your friends a gift!</Gift>

      <Review>
        Reviews
      </Review>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 50%;
  padding: 1.5rem;
  transform: rotate(90deg);
  position: fixed;
  right: 0;
  width: 0;
  z-index: 1000;
`;

const Gift = styled.p`
  background: black;
  color: white;
  text-align: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem;
  // line-height: 1;
  font-size: 18px;
  white-space: nowrap;
  width: auto;
  margin-right: 1rem;
  cursor: pointer;
`;



const Review = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  text-align: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: auto;
  line-height: 1;
  font-size: 18px;
  padding: 1rem;
  cursor: pointer;
`;

export default Aside;
