import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Header from "./Header";

function MenuOptions({ toggle }) {
  const [isMenuClicked, setMenuClicked] = useState(false);

 
  return (
    <Container>
      <CloseContainer>
        <Close onClick={toggle} />
      </CloseContainer>
      <p>All Categories</p>
      <p>Products</p>
      <p>FAQ</p>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  z-index: 1000;
  padding: 0.5rem;

  p {
    color: #677279;
    cursor: pointer;
    padding-left: 0.5rem;
  }
`;

const Close = styled(CloseIcon)`
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 1.5rem;
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default MenuOptions;
