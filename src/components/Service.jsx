import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

function Service({
  serviceHeading,
  serviceRendered,
  email,
  contact,
  extra,
  index,
}) {
  console.log(`id: ${index}`);
  return (
    <Container>
      <ServiceImageContainer>
        {/* render icons based on the index value. */}
        {index === 1 ? <ServiceImage1 /> : ""}
        {index === 2 ? <ServiceImage2 /> : ""}
        {index === 3 ? <ServiceImage3 /> : ""}
        {index === 4 ? <ServiceImage4 /> : ""}
      </ServiceImageContainer>
      <ServiceHeader>{serviceHeading}</ServiceHeader>
      <ServiceText>
        {serviceRendered}

        {/* if index is 3 then email must exist */}
        {index === 3 && (
          <p>
            Email: <span>{email}</span>
          </p>
        )}

        {contact && (
          <p>
            Call: <span>{contact}</span>
          </p>
        )}
        {index === 4 && (
          <p>
            <b>{extra}</b>
          </p>
        )}
      </ServiceText>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const ServiceImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  height: 20px;
  text-align: center;
`;

const ServiceImage1 = styled(LocalShippingTwoToneIcon)`
  transform: scale(1.5);
`;
const ServiceImage2 = styled(CardGiftcardOutlinedIcon)`
  transform: scale(1.5);
`;
const ServiceImage3 = styled(SupportAgentOutlinedIcon)`
  transform: scale(1.5);
`;
const ServiceImage4 = styled(CreditCardOutlinedIcon)`
  transform: scale(1.5);
`;

const ServiceHeader = styled.p`
  font-weight: bold;
  text-align: start;
  margin: 0;
  line-height: 2.5;
`;
const ServiceText = styled.p`
  text-align: center;
  margin: 0;
  line-height: 1.5;

  span {
    color: red;
    text-decoration: underline;
  }
`;
export default Service;
