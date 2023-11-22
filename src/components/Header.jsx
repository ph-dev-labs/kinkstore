import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function () {
  return (
    <>
    <HeaderText>
    <p>Free shipping Over $69 for US | Discreet Shipping and Billing</p>
  </HeaderText>
    <Navbar>
      <MainHeader>
        <section className="left">
          <Menu />
          <Logo src="/images/ADS-1.png" />
        </section>
        <section className="right">
          <Search />
          <Profile />
          <Cart />
        </section>
      </MainHeader>
    </Navbar>
    </>
  );
}

const Navbar = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: white;
`;

const HeaderText = styled.div`
  display: flex;
  color: red;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 0, 0, 0.3);
  p {
    text-align: center;
    line-height: 1.5;
    font-size: 1rem;
  }
`;

const MainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 1rem;
  position: sticky;
  left: 0;
  right:0;
  section.left {
    display: flex;
    color: inherit;
    justify-content: baseline;
    align-items: center;
  }

  section.right {
    display: flex;
    color: inherit;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  max-width: 100px;
  height: 40px;
  object-fit: cover;
`;

const Menu = styled(MenuIcon)``;
const Search = styled(SearchIcon)``;
const Profile = styled(PersonOutlineIcon)``;
const Cart = styled(ShoppingCartOutlinedIcon)``;
