import React from "react";
import styled from "styled-components";
import Paypal from "./paymentOptions/Paypal";
import AmericanExpress from "./paymentOptions/AmericaExpress";
import ApplePay from "./paymentOptions/ApplePay";
import Discover from "./paymentOptions/Discover";
import JCB from "./paymentOptions/JCB";
import MasterCard from "./paymentOptions/MasterCard";
import Visa from "./paymentOptions/Visa";
import Venmo from "./paymentOptions/Venmo";
import { useMediaQuery } from "react-responsive";

function PaymentOpts() {
  const breakPoint = useMediaQuery({ query: "(max-width: 642px)" });

  return (
    <Container>
      <p>We Accept</p>
      <PaymentMethods breakPoint={breakPoint}>
        <Paypal fontSize="large" />
        <AmericanExpress />
        <ApplePay />
        <Discover />
        <JCB />
        <MasterCard />
        <Visa />
        <Venmo />
      </PaymentMethods>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0.5rem;

  p {
    color: inherit;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  gap: 0.5rem;
`;
export default PaymentOpts;
