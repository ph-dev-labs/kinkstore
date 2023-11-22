import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <MainImage src="images/K-3.png" />
    </Container>
  );
}

const Container = styled.div`
  height: 78vh;
  width: 100%;
  position: static;
  z-index: -1;
  p {
    color: white;
  }
`;

const MainImage = styled.img`
  height: 100%;
  width: inherit;
  object-fit: cover;
`;

export default Main;
