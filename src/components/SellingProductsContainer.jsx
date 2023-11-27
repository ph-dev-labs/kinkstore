import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import SellingProducts from "./SellingProduct";

function SellingProductsContainer() {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  return <Container breakPoint={breakPoint}>
<SellingProducts src="/images/K-3.png" title="hello" price={15.99}/>
<SellingProducts src="/images/K-3.png"title="hello" price={15.99}/>
<SellingProducts src="/images/K-3.png"title="hello" price={15.99}/>
<SellingProducts src="/images/K-3.png"title="hello" price={15.99}/>
<SellingProducts src="/images/K-3.png"title="hello" price={15.99}/>
  </Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
`;

export default SellingProductsContainer;
