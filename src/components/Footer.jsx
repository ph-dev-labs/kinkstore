import React from "react";
import styled from "styled-components";
import Brand from "./Brand.jsx";
import FollowUs from "./FollowUs.jsx";
import PaymentOpts from "./PaymentOpts.jsx";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  return (
    <Container breakPoint={breakPoint}>
      <Brand />
      <PaymentOpts />
      <FollowUs />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: ${({ breakPoint }) =>
    breakPoint ? "column-reverse" : "row-reverse"};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f3f5f6;
  padding: 1rem;

  p {
    color: #677279;
  }
`;

export default Footer;
