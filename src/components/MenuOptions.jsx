import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Header from "./Header";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MenuOptions({ toggle }) {
  const [isExpandCategory, setIsExpandCategory] = useState(false);
  const [isExpandProduct, setIsExpandProduct] = useState(false);

  function handleIsExpandCategory() {
    setIsExpandCategory(!isExpandCategory);
  }

  function handleIsExpandProduct() {
    setIsExpandProduct(!isExpandProduct);
  }

  return (
    <Container>
      <CloseContainer>
        <Close onClick={toggle} />
      </CloseContainer>
      <MenuItemsContainer>
        <section className="categories">
          <p>Categories</p>
          <div>
            {isExpandCategory ? (
              <Collapse onClick={handleIsExpandCategory} />
            ) : (
              <Expand onClick={handleIsExpandCategory} />
            )}
          </div>
        </section>
        <section className="products">
          <p>Products</p>
          <div>
            {isExpandProduct ? (
              <Collapse onClick={handleIsExpandProduct} />
            ) : (
              <Expand onClick={handleIsExpandProduct} />
            )}
          </div>
        </section>
        <section>
          <p>FAQ</p>
        </section>
      </MenuItemsContainer>
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
  color: #677279;

  p {
    color: inherit;
    cursor: pointer;
    padding-left: 0.5rem;
  }

  section.categories,
  section.products {
    display: flex;
    justify-content: space-around;
  }

  section.categories div,
  section.products div {
    display: flex;
    justify-content: end;
    align-items: center;
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
  margin-bottom: 1.5rem;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Expand = styled(ChevronRightIcon)`
  color: inherit;
  padding-right: 2rem;
`;

const Collapse = styled(ExpandMoreIcon)`
  color: inherit;
  padding-right: 2rem;
`;
export default MenuOptions;
