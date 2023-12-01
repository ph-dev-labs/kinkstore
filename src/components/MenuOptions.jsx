import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Header from "./Header";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetCategoryQuery } from "../redux/api/api";
import CreateList from "./CreateList";

function MenuOptions({ toggle }) {
  const [isExpandCategory, setIsExpandCategory] = useState(false);
  const [isExpandProduct, setIsExpandProduct] = useState(false);

  const { data, isLoading, isError } = useGetCategoryQuery();
  console.log(data, isLoading, isError);

  function handleIsExpandCategory() {
    setIsExpandCategory(!isExpandCategory);
  }

  function handleIsExpandProduct() {
    setIsExpandProduct(!isExpandProduct);
  }

  console.log(`is expanded: ${isExpandCategory}`);
  return (
    <Container>
      <CloseContainer>
        <Close onClick={toggle} />
      </CloseContainer>
      <MenuItemsContainer>
        <section className="categories">
          <li>
            Categories
            {!isError && data && isExpandCategory && <CreateList data={data} />}
          </li>
          <div>
            {data && isExpandCategory ? (
              <Collapse onClick={handleIsExpandCategory} />
            ) : (
              <Expand onClick={handleIsExpandCategory} />
            )}
          </div>
        </section>
        <section className="products">
          <li>Products</li>
          <div>
            {isExpandProduct ? (
              <Collapse onClick={handleIsExpandProduct} />
            ) : (
              <Expand onClick={handleIsExpandProduct} />
            )}
          </div>
        </section>
        <section>
          <li>FAQ</li>
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

  li {
    color: inherit;
    cursor: pointer;
    padding-left: 0.5rem;
    list-style: none;
    vertical-align: center;
    position: relative;
  }
  // ul {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: start;
  //   align-items: start;
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   color: inherit;
  // }

  // ul li {
  //   font-weight: bold;
  // }

  section.categories,
  section.products {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  section.categories div,
  section.products div {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  section.products {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  section {
    margin-bottom: 1rem;
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
  // position: relative;
`;

const Expand = styled(ChevronRightIcon)`
  color: inherit;
  padding-right: 2rem;
  cursor: pointer;
`;

const Collapse = styled(ExpandMoreIcon)`
  color: inherit;
  padding-right: 2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;
export default MenuOptions;
